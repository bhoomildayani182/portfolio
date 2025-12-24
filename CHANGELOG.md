# Changelog

## [Unreleased] - 2025-12-24

### Security

- **Updated** `next` from **15.3.1** to **15.3.8** to address critical remote code execution and denial-of-service vulnerabilities affecting React Server Components and server request handling:
  - CVE-2025-55182 / CVE-2025-66478 (Critical): RCE via crafted RSC payloads
  - CVE-2025-55184 (High): DoS via malicious HTTP request
  - CVE-2025-55183 (Medium): Server Action source code exposure
  - CVE-2025-67779 (High): DoS via malicious RSC payload causing infinite loop

- **Updated** `eslint-config-next` from **15.3.1** to **15.3.8** to maintain consistency with the Next.js release.

### Notes

- The project build was verified successfully after the update (see `npm run build`).
- This update resolves a Netlify deployment blocker related to the RSC vulnerabilities.
