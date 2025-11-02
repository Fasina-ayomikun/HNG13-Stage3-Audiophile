import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: { clientId: v.string() },
  handler: async (ctx, { clientId }) => {
    const cart = await ctx.db
      .query("carts")
      .withIndex("by_clientId", (q) => q.eq("clientId", clientId))
      .first();
    return cart ?? { items: [], clientId, _id: null };
  },
});

export const add = mutation({
  args: {
    clientId: v.string(),
    item: v.object({
      slug: v.string(),
      name: v.string(),
      price: v.number(),
      image: v.string(),
      quantity: v.number(),
      category: v.string(),
    }),
  },
  handler: async (ctx, { clientId, item }) => {
    const cart = await ctx.db
      .query("carts")
      .withIndex("by_clientId", (q) => q.eq("clientId", clientId))
      .first();
    const now = Date.now();

    if (!cart) {
      await ctx.db.insert("carts", {
        clientId,
        items: [item],
        createdAt: now,
        updatedAt: now,
      });
      return;
    }
    const items = [...cart.items];
    const idx = items.findIndex((i) => i.slug === item.slug);
    if (idx >= 0)
      items[idx] = {
        ...items[idx],
        quantity: items[idx].quantity + item.quantity,
      };
    else items.push(item);
    await ctx.db.patch(cart._id, { items, updatedAt: now });
  },
});

export const setQty = mutation({
  args: { clientId: v.string(), slug: v.string(), quantity: v.number() },
  handler: async (ctx, { clientId, slug, quantity }) => {
    const cart = await ctx.db
      .query("carts")
      .withIndex("by_clientId", (q) => q.eq("clientId", clientId))
      .first();
    if (!cart) return;
    const items = cart.items.map((i) =>
      i.slug === slug ? { ...i, quantity: Math.max(1, quantity) } : i
    );
    await ctx.db.patch(cart._id, { items, updatedAt: Date.now() });
  },
});

export const remove = mutation({
  args: { clientId: v.string(), slug: v.string() },
  handler: async (ctx, { clientId, slug }) => {
    const cart = await ctx.db
      .query("carts")
      .withIndex("by_clientId", (q) => q.eq("clientId", clientId))
      .first();
    if (!cart) return;
    const items = cart.items.filter((i) => i.slug !== slug);
    await ctx.db.patch(cart._id, { items, updatedAt: Date.now() });
  },
});

export const clear = mutation({
  args: { clientId: v.string() },
  handler: async (ctx, { clientId }) => {
    const cart = await ctx.db
      .query("carts")
      .withIndex("by_clientId", (q) => q.eq("clientId", clientId))
      .first();
    if (!cart) return;
    await ctx.db.patch(cart._id, { items: [], updatedAt: Date.now() });
  },
});
