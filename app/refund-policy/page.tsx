export default function RefundPolicy() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.4em] text-[#C9A96E] uppercase mb-4">Legal</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-6xl font-light text-[#F5F0E8] leading-none mb-6">
            Refund Policy
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-xs text-[#F5F0E8]/30 tracking-widest">
            Last updated: November 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {[
            {
              title: "1. Returns",
              body: "We accept returns within 14 days of delivery. Items must be unworn, unwashed, and in their original packaging with all tags attached. Sale items and limited edition pieces are final sale and cannot be returned.",
            },
            {
              title: "2. Exchanges",
              body: "We offer free exchanges on sizing within 14 days of delivery. To initiate an exchange, contact us at hello@withney.com with your order number and the size you need. We will ship the exchange once the original item is received.",
            },
            {
              title: "3. Refund Process",
              body: "Once your return is received and inspected, we will notify you by email. If approved, your refund will be processed within 5–10 business days to your original payment method. Shipping costs are non-refundable.",
            },
            {
              title: "4. Damaged or Defective Items",
              body: "If you receive a damaged or defective item, please contact us within 48 hours of delivery at hello@withney.com with photos of the damage. We will replace the item or issue a full refund at no cost to you.",
            },
            {
              title: "5. Non-Returnable Items",
              body: "The following items cannot be returned: sale items, limited edition drops, items marked as final sale, underwear, bodysuits, and any items that have been worn, washed, or altered.",
            },
            {
              title: "6. Shipping Returns",
              body: "To return an item, mail it to: Withney Fashion, Lagos, Nigeria. You are responsible for return shipping costs unless the item is defective. We recommend using a trackable shipping service as we cannot guarantee receipt of returned items.",
            },
            {
              title: "7. Contact Us",
              body: "For all return and refund enquiries, reach us at hello@withney.com or call +234 801 234 5678 between Monday–Saturday, 9am–6pm WAT.",
            },
          ].map((section) => (
            <div key={section.title} className="border-t border-[#C9A96E]/20 pt-10">
              <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#C9A96E] font-light mb-4">
                {section.title}
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8]/60 leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 border border-[#C9A96E]/20 p-10 text-center">
          <p className="font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8]/50 mb-6">
            Still have questions about your order?
          </p>
          <a href="mailto:hello@withney.com"
            className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase bg-[#C9A96E] text-[#0A0A0A] px-10 py-4 hover:bg-[#F5F0E8] transition-all duration-300 inline-block">
            Contact Support
          </a>
        </div>

      </div>
    </div>
  );
}
