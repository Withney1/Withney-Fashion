import Link from "next/link";

export default function RefundPolicy() {
  return (
    <div style={{ backgroundColor: "#0A0A0A", width: "100%", minHeight: "100vh", overflowX: "hidden" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "128px 32px 96px" }}>

        <div style={{ marginBottom: "64px" }}>
          <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "11px", letterSpacing: "0.4em", color: "#C9A96E", textTransform: "uppercase", marginBottom: "16px" }}>Legal</p>
          <h1 className="font-[family-name:var(--font-cormorant)]" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 300, color: "#F5F0E8", lineHeight: 0.95, marginBottom: "24px" }}>Refund Policy</h1>
          <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "11px", color: "rgba(245,240,232,0.3)", letterSpacing: "0.1em" }}>Last updated: November 2026</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
          {[
            { title: "1. Returns", body: "We accept returns within 14 days of delivery. Items must be unworn, unwashed, and in their original packaging with all tags attached. Sale items and limited edition pieces are final sale and cannot be returned." },
            { title: "2. Exchanges", body: "We offer free exchanges on sizing within 14 days of delivery. To initiate an exchange, contact us at hello@withney.com with your order number and the size you need. We will ship the exchange once the original item is received." },
            { title: "3. Refund Process", body: "Once your return is received and inspected, we will notify you by email. If approved, your refund will be processed within 5–10 business days to your original payment method. Shipping costs are non-refundable." },
            { title: "4. Damaged or Defective Items", body: "If you receive a damaged or defective item, please contact us within 48 hours of delivery at hello@withney.com with photos of the damage. We will replace the item or issue a full refund at no cost to you." },
            { title: "5. Non-Returnable Items", body: "The following items cannot be returned: sale items, limited edition drops, items marked as final sale, underwear, bodysuits, and any items that have been worn, washed, or altered." },
            { title: "6. Shipping Returns", body: "To return an item, mail it to: Withney Fashion, Lagos, Nigeria. You are responsible for return shipping costs unless the item is defective. We recommend using a trackable shipping service." },
            { title: "7. Contact Us", body: "For all return and refund enquiries, reach us at hello@withney.com or call +234 801 234 5678 between Monday–Saturday, 9am–6pm WAT." },
          ].map((section) => (
            <div key={section.title} style={{ borderTop: "1px solid rgba(201,169,110,0.2)", paddingTop: "40px" }}>
              <h2 className="font-[family-name:var(--font-cormorant)]" style={{ fontSize: "24px", color: "#C9A96E", fontWeight: 300, marginBottom: "16px" }}>{section.title}</h2>
              <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "14px", color: "rgba(245,240,232,0.6)", lineHeight: 1.9 }}>{section.body}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "80px", border: "1px solid rgba(201,169,110,0.2)", padding: "48px 32px", textAlign: "center" }}>
          <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "14px", color: "rgba(245,240,232,0.5)", marginBottom: "24px" }}>Still have questions about your order?</p>
          <a href="mailto:hello@withney.com" className="font-[family-name:var(--font-inter)]"
            style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", backgroundColor: "#C9A96E", color: "#0A0A0A", padding: "16px 40px", display: "inline-block", textDecoration: "none" }}>
            Contact Support
          </a>
        </div>

      </div>
    </div>
  );
}
