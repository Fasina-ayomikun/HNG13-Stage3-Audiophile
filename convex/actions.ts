import { action } from "./_generated/server";
import { v } from "convex/values";
import { Resend } from "resend";

export const sendOrderEmail = action({
  args: {
    to: v.string(),
    orderId: v.optional(v.string()),
    name: v.string(),
    items: v.array(
      v.object({
        name: v.string(),
        quantity: v.number(),
        price: v.number(),
      })
    ),
    grandTotal: v.number(),
  },
  handler: async (_ctx, args) => {
    const apiKey = process.env.RESEND_API_KEY;

    console.log("[sendOrderEmail] key present:", Boolean(apiKey));

    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not set");
    }

    const resend = new Resend(apiKey);

    const html = `
      <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:auto">
        <h2>Thanks for your order, ${args.name}!</h2>
        ${args.orderId ? `<p>Order ID: <strong>${args.orderId}</strong></p>` : ""}
        <ul>
          ${args.items.map((i) => `<li>${i.name} × ${i.quantity}</li>`).join("")}
        </ul>
        <p><strong>Total:</strong> $${(args.grandTotal / 100).toFixed(2)}</p>
      </div>`.trim();

    await resend.emails.send({
      from: "Audiophile <onboarding@resend.dev>",
      to: args.to,
      subject: `Your Audiophile order ${args.orderId ?? ""}`,
      html,
    });
  },
});
