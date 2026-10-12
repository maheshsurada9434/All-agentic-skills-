---
name: domain-renewal-lookup
description: Find a website's domain renewal (expiry) date and time, registrar, age and lifecycle stage using RDAP, the official replacement for WHOIS, and explain when an expired domain may become available. Use for "when does this domain expire", "is this domain available", domain watchlists, expiry reminders or expired-domain research.
---

# Domain renewal lookup (RDAP)

## How to look a domain up
1. **Normalise** the input to the registrable domain: strip protocol, path, `www.`, email local part; keep 3 labels for second-level endings such as `co.in`, `co.uk`, `com.au`.
2. **Find the registry's RDAP server** from IANA's bootstrap file `https://data.iana.org/rdap/dns.json` (`services: [[tlds], [urls]]`). Cache it. Fallback: `https://rdap.org/domain/<name>` redirects to the right server.
3. **GET `<base>domain/<name>`** with `Accept: application/rdap+json`.
   - `404` means no record: the domain is most likely **free to register**.
   - `429` means rate limited: back off and retry later, and keep a delay between bulk lookups.
4. **Read the JSON**:
   - `events[]`: `expiration` (renewal date), `registration`, `last changed`.
   - `status[]`: e.g. `client transfer prohibited`, `auto renew period`, `redemption period`, `pending delete`, `client hold`.
   - `entities[]` with role `registrar`: name from `vcardArray` `fn`, IANA id from `publicIds`.
   - `nameservers[].ldhName` hints at hosting (cloudflare, dns-parking = Hostinger, domaincontrol = GoDaddy …).
5. Show the expiry **in the user's time zone and in UTC**, plus days left.

Most registries send `Access-Control-Allow-Origin: *`, so this works straight from a browser page. Some country endings publish no RDAP yet: say so and link to `https://lookup.icann.org/en/lookup?name=<domain>`.

## Lifecycle after expiry (typical gTLD; varies by registry)
| Stage | Roughly | What it means |
|---|---|---|
| Expired / grace | 0–45 days | Owner can renew at the normal price |
| Redemption | ~30 days | Deleted; owner can still recover it for a fee |
| Pending delete | 5 days | Locked, then released |
| Available | after ~75–80 days | Anyone can register it |

Most owners renew, and many have auto-renew on, so an active site rarely drops.

## Finding expiring domains in bulk
Public daily lists exist (for example the SnapNames deleting list and GoDaddy Auctions inventory JSON files). Stream-parse them; they are hundreds of MB.

## Fair use
Registering someone's brand or company name to sell it back to them is bad-faith registration under UDRP (and INDRP for `.in`); the owner can take it back. Recommend generic names, marketplaces (Sedo, Afternic, Dan.com), or a paid renewal-reminder service for site owners instead.
