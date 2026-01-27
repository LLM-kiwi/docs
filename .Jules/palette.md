## 2026-01-27 - Visual Structure with Steps
**Learning:** Using semantic `<Steps>` components in documentation significantly improves scannability compared to plain numbered headers. It visually connects related actions and provides a clear vertical rhythm, making complex setup processes feel more manageable to users.
**Action:** Whenever converting linear "Step 1, Step 2" instructions, always check if the design system supports a specialized `<Steps>` component to enhance visual hierarchy and progress tracking.

## 2026-01-29 - Semantic Organization of Troubleshooting
**Learning:** Grouping troubleshooting issues into an `<AccordionGroup>` significantly reduces visual clutter and allows users to quickly scan for their specific problem without scrolling through irrelevant solutions.
**Action:** Identify lists of "Common Issues" or "FAQ" sections in documentation and refactor them into collapsible accordion components to improve page scanability.

## 2026-02-01 - Automated Accessibility Validation
**Learning:** The Mintlify CLI includes a `mint a11y` command that checks for color contrast and missing alt text. This tool reveals issues in `docs.json` theme colors that manual review might miss.
**Action:** Incorporate `mint a11y` into the verification process for any documentation changes, especially when modifying global themes or adding images.
