# Domain Setup: GoDaddy → Cloudflare → Pages

Ye guide `Rajputra_Aerospace_client/` website ko GoDaddy se kharide gaye domains se jodne ke liye hai. Har step ke aage checkbox hai: jo ho gaya, use `[x]` karte jao.

## Overview

| Cheez | Value |
|---|---|
| Website code | `Rajputra_Aerospace_client/` |
| GitHub repo | `ajit421/Rajputra_Aerospace` (branch `main`) |
| Cloudflare Pages project | `rajputra` → https://rajputra.pages.dev |
| Domain registrar | GoDaddy (account: Bibhuti) |
| Cloudflare account | Ajit.info999@gmail.com |
| Cloudflare nameservers | `adam.ns.cloudflare.com`, `naya.ns.cloudflare.com` |
| Domain expiry | Oct 4, 2027 (chaaron) |

### Plan

Chaaron domains, `www` ke saath aur bina `www` ke, **same website** dikhayenge. Address bar me wahi domain rahega jo user ne likha. Koi redirect nahi hoga.

| User ye khole | Kya dikhega |
|---|---|
| `rajputra.co`, `www.rajputra.co` | Website |
| `rajputra.space`, `www.rajputra.space` | Same website |
| `rajputraaero.space`, `www.rajputraaero.space` | Same website |
| `rajputraero.space`, `www.rajputraero.space` | Same website |

Ye isliye hota hai kyunki ye saare 8 naam ek hi Pages project `rajputra` ke **Custom domains** me jude hain.

Google ke liye `rajputra.co` main domain hai: `index.html` me `<link rel="canonical" href="https://rajputra.co/">` laga hai. Isse search result me `rajputra.co` dikhega aur duplicate content ka issue nahi aayega. Users ke liye baaki domain waise hi chalte rahenge.

### Status

| Domain | Cloudflare me add | DNS saaf | GoDaddy nameserver | Cloudflare Active | Pages custom domain (root + www) |
|---|---|---|---|---|---|
| `rajputra.co` | ✅ | ✅ | ✅ | ✅ | ✅ |
| `rajputra.space` | ✅ | ✅ | ✅ | ✅ | ✅ |
| `rajputraaero.space` | ✅ | ✅ | ✅ | ✅ | ✅ |
| `rajputraero.space` | ✅ | ✅ | ✅ | ✅ | ✅ |

Oct 4, 2026 ko check kiya: saare 8 naam `200` dete hain aur "Rajputra Aerospace" website dikhate hain, random path pe bhi.

---

## Step 0: Pages project (pehle se ho chuka hai)

- [x] Cloudflare **Workers & Pages** me `rajputra` project bana hai, jo GitHub repo `ajit421/Rajputra_Aerospace` se juda hai.
- [x] Build settings:
  - Build command: `npm run build`
  - Build output: `dist`
  - Root directory: `Rajputra_Aerospace_client`
  - Production branch: `main`, automatic deployments on
- [x] Site https://rajputra.pages.dev pe live hai.

`main` branch pe push karte hi site apne aap dobara deploy hoti hai.

---

## Step 1: `rajputra.co` ko Cloudflare pe lana

### 1A. Cloudflare me domain add karo

- [x] Cloudflare me **Account home → Domains → Add a domain** pe jao.
- [x] **Connect a domain** chuno. "Transfer a domain" mat chunna: domain Oct 3, 2026 ko kharida gaya hai aur 60 din tak transfer nahi ho sakta.
- [x] Domain name me `rajputra.co` likho.
- [x] AI settings bharo:
  - Search: **Allow**
  - Agent: **Allow**
  - Training: apni marzi
  - "I monetize pages that serve ads": untick
  - Bot Preference Sync: on
- [x] Import DNS records: **Automatic**. Fir **Continue** dabao.
- [x] Plan me **Free** chuno.

### 1B. DNS records saaf karo

**Review your DNS records** page pe ye records delete karo:

- [x] `A` `rajputra.co` → `15.197.148.33` (GoDaddy parking)
- [x] `A` `rajputra.co` → `3.33.130.190` (GoDaddy parking)
- [x] `CNAME` `_domainconnect` → `_domainconnect.gd.domaincontrol.com`
- [x] `CNAME` `www` → `rajputra.co`

Ye record **rakhna** hai:

- [x] `TXT` `_dmarc` → `v=DMARC1; p=quarantine; ...` (ye nakli email rokta hai)

Aakhir me **Continue to activation** dabao.

### 1C. GoDaddy me nameserver badlo

- [x] GoDaddy me **My Products → Domains → `rajputra.co` → Manage** pe jao.
- [x] **DNS** tab kholo, fir **DNSSEC** sub-tab check karo. Ye khaali / off hona chahiye.
- [x] **DNS → Nameservers → Change Nameservers** dabao.
- [x] **"I'll use my own nameservers"** chuno.
- [x] Do nameserver daalo:
  ```
  adam.ns.cloudflare.com
  naya.ns.cloudflare.com
  ```
- [x] Purane `ns75` / `ns76.domaincontrol.com` hata do. Fir **Save** dabao, checkbox tick karo aur **Continue** dabao.
- [x] GoDaddy me ab "Using custom nameservers" dikh raha hai.

### 1D. Cloudflare me confirm karo

- [x] Cloudflare me **I updated my nameservers** dabao.
- [x] Wait karo. Aam taur pe 1–2 ghante lagte hain, kabhi 24 ghante tak. 30–60 min me ek baar **Check nameservers now** daba sakte ho.
- [x] Domain Active hone pe Cloudflare email bhejega, aur Overview pe status **Active** dikhega.

GoDaddy me **"Turn on DNSSEC"** ka banner dikhe to abhi mat dabana. Wo on ho gaya to site nahi khulegi.

---

## Step 2: Baaki 3 domains Cloudflare pe lana

Ye kaam `rajputra.co` ke Active hone ka wait karte hue bhi kar sakte ho. Har domain ke liye bilkul Step 1 wala process hai.

### `rajputra.space`

- [x] Cloudflare me **Domains → Add a domain → Connect a domain** pe jao aur `rajputra.space` likho.
- [x] Same AI settings bharo, fir **Continue** dabao aur **Free** plan chuno.
- [x] DNS records me ye delete karo: dono `A` (parking), `CNAME www`, `CNAME _domainconnect`. `TXT _dmarc` rakho.
- [x] **Continue to activation** dabao. Nameservers note karo (aksar `adam` / `naya` hi hote hain, phir bhi check karo).
- [x] GoDaddy me `rajputra.space` → **Manage → DNS → DNSSEC** off hai ya nahi, check karo.
- [x] GoDaddy me **DNS → Nameservers → Change → I'll use my own** chuno, dono Cloudflare nameserver daalo aur **Save** dabao.
- [x] Cloudflare me **I updated my nameservers** dabao.
- [x] Domain **Active** hone ka wait karo.

### `rajputraaero.space`

- [x] Cloudflare me **Add a domain → Connect a domain** pe jao aur `rajputraaero.space` likho.
- [x] Same AI settings bharo, fir **Continue** dabao aur **Free** plan chuno.
- [x] DNS records me dono `A`, `CNAME www` aur `CNAME _domainconnect` delete karo. `TXT _dmarc` rakho.
- [x] **Continue to activation** dabao aur nameservers note karo.
- [x] GoDaddy me DNSSEC off hai ya nahi, check karo.
- [x] GoDaddy me nameservers Cloudflare wale karo aur **Save** dabao.
- [x] Cloudflare me **I updated my nameservers** dabao.
- [x] Domain **Active** hone ka wait karo.

### `rajputraero.space`

- [x] Cloudflare me **Add a domain → Connect a domain** pe jao aur `rajputraero.space` likho.
- [x] Same AI settings bharo, fir **Continue** dabao aur **Free** plan chuno.
- [x] DNS records me dono `A`, `CNAME www` aur `CNAME _domainconnect` delete karo. `TXT _dmarc` rakho.
- [x] **Continue to activation** dabao aur nameservers note karo.
- [x] GoDaddy me DNSSEC off hai ya nahi, check karo.
- [x] GoDaddy me nameservers Cloudflare wale karo aur **Save** dabao.
- [x] Cloudflare me **I updated my nameservers** dabao.
- [x] Domain **Active** hone ka wait karo.

---

## Step 3: `rajputra.co` ko Pages project se jodna

Ye step tabhi karo jab Cloudflare me `rajputra.co` **Active** dikhe.

- [x] Cloudflare me **Compute → Workers & Pages → `rajputra`** kholo, fir **Custom domains** tab pe jao.
- [x] **Set up a custom domain** dabao, `rajputra.co` likho aur **Continue** dabao.
- [x] **Activate domain** dabao. Cloudflare khud DNS record bana dega.
- [x] Fir dobara **Set up a custom domain** dabao, `www.rajputra.co` likho aur **Activate domain** dabao.
- [x] Dono domains ka status **Active** hone ka wait karo. SSL certificate banne me 5–15 min lagte hain.
- [x] Browser me https://rajputra.co aur https://www.rajputra.co khol ke check karo.

`www.rajputra.co` ko redirect **nahi** karna hai. Wo bhi seedha website dikhayega.

---

## Step 4: Baaki 3 domains ko bhi same Pages project se jodna

Ye bilkul Step 3 jaisa hai. Har domain ke liye root aur `www`, dono add karne hain, yani kul 6 naam. Saare naam **usi `rajputra` project** me add hone chahiye, naya project mat banana.

Cloudflare me **Compute → Workers & Pages → `rajputra` → Custom domains** kholo, fir har naam ke liye **Set up a custom domain** dabao, naam likho, **Continue** dabao aur **Activate domain** dabao.

- [x] `rajputra.space`
- [x] `www.rajputra.space`
- [x] `rajputraaero.space`
- [x] `www.rajputraaero.space`
- [x] `rajputraero.space`
- [x] `www.rajputraero.space`

Har naam ke liye Cloudflare us domain me khud ek `CNAME` record bana dega, jo `rajputra.pages.dev` ki taraf point karega. Aapko DNS me haath se kuch nahi daalna.

Aakhir me **Custom domains** list me 8 naam dikhne chahiye, sab ke aage **Active**:

```
rajputra.co             www.rajputra.co
rajputra.space          www.rajputra.space
rajputraaero.space      www.rajputraaero.space
rajputraero.space       www.rajputraero.space
```

SSL certificate har naam ke liye alag banta hai, jisme 5–15 min lagte hain. Tab tak status "Verifying" ya "Initializing" dikhega.

### Link kuch bhi ho, site khulegi

`rajputra.space/kuch-bhi` jaisa link bhi website hi kholega. Cloudflare Pages me 404 page nahi hai, isliye wo har unknown path pe `index.html` dikhata hai. Iske liye koi extra setting nahi chahiye.

---

## Step 5: Check karo ki sab chal raha hai

PowerShell me ye commands chalao.

**Nameservers check karo.** Har domain ke liye `adam` / `naya.ns.cloudflare.com` aana chahiye:

```powershell
foreach ($d in 'rajputra.co','rajputra.space','rajputraaero.space','rajputraero.space') {
  "== $d"; (Resolve-DnsName $d -Type NS -Server 1.1.1.1 -DnsOnly).NameHost
}
```

**Saare 8 naam check karo:**

```powershell
foreach ($d in 'rajputra.co','www.rajputra.co','rajputra.space','www.rajputra.space','rajputraaero.space','www.rajputraaero.space','rajputraero.space','www.rajputraero.space') {
  "$d -> " + (curl.exe -s -o NUL -w "%{http_code}" "https://$d/")
}
```

Har line ke aage `200` aana chahiye. Fir browser me koi bhi 2–3 domain khol ke dekho: same website dikhni chahiye, aur address bar me wahi domain rehna chahiye jo aapne likha.

- [x] Saare checks pass ho gaye

---

## Step 6: Baad ke kaam (optional, par achhe hain)

### DNSSEC on karo (sab Active hone ke baad)

- [ ] Cloudflare me domain kholo, fir **DNS → Settings → Enable DNSSEC** dabao. Cloudflare ek **DS record** dikhayega.
- [ ] GoDaddy me us domain ke **DNS → DNSSEC → Add** me DS record ki values (Key Tag, Algorithm, Digest Type, Digest) daalo.
- [ ] Har domain ke liye yahi repeat karo.

Ye kaam GoDaddy ke "Turn on DNSSEC" button se **nahi** karna. DNSSEC Cloudflare wala hi chahiye.

### Email (`info@rajputra.co`)

- [ ] Cloudflare me `rajputra.co` kholo, fir **Email → Email Routing → Get started** pe jao.
- [ ] Custom address `info` banao aur destination me apna Gmail daalo. Fir Gmail me verify link pe click karo.
- [ ] Cloudflare jo MX aur TXT records banana chahe, unhe add karne do.
- [ ] Website ka contact email `Rajputra_Aerospace_client/src/data.ts` me `CONTACT_EMAIL` hai. Abhi wahan `hello@rajputra.in` likha hai, par `rajputra.in` hamara domain nahi hai, isliye enquiry form ki mail kahin nahi pahunchti. Email Routing set hone ke baad ise `hello@rajputra.co` (ya jo address banaya) karo aur `main` pe push karo.

### Security

- [ ] GoDaddy me **2-Step Verification** on karo. Chaaron domain isi account me hain.
- [ ] GoDaddy me **Domain Lock** on hi rakho.
- [ ] Domain renewal se pehle GoDaddy me auto-renew on hai ya nahi, check karo. Expiry Oct 4, 2027 hai.

### Safai

- [ ] Purana Worker `rajput-royale` agar ab kaam ka nahi hai to **Workers & Pages** se delete karo.

---

## Kya NAHI karna

| Mat karo | Kyun |
|---|---|
| GoDaddy me "Turn on DNSSEC" | Cloudflare pe shift hone ke baad site nahi khulegi |
| GoDaddy ke DNS Records edit karna | Nameserver badalne ke baad wo records kaam hi nahi karte. Ab saare records Cloudflare me banane hain |
| GoDaddy "Connect Domain / Airo / Website / SSL / Use My Domain" | Ye paid services hain. Site aur SSL Cloudflare free deta hai |
| Cloudflare "Create Worker" | Site Pages project `rajputra` se chalti hai |
| Cloudflare "Under Attack Mode" | Har visitor ko challenge page dikhega |
| Cloudflare "Remove from Cloudflare" | Domain ka DNS toot jayega |
| "Transfer a domain" | Zaroorat nahi hai, aur 60 din tak ho bhi nahi sakta |

## Problem aaye to

| Problem | Hal |
|---|---|
| 24 ghante baad bhi Cloudflare me "Pending" hai | GoDaddy me nameservers dobara dekho: spelling, ya koi purana `domaincontrol.com` bacha to nahi. DNSSEC off hai ya nahi, ye bhi check karo |
| Pages custom domain me "CNAME record already exists" error | Cloudflare **DNS → Records** me `rajputra.co` ya `www` ka purana record delete karo, fir dobara add karo |
| Browser me `ERR_SSL` ya certificate error | 15–30 min wait karo. SSL ban raha hota hai. **SSL/TLS** me mode **Full** rakho |
| Koi ek domain nahi khul raha | **Workers & Pages → `rajputra` → Custom domains** me wo naam hai ya nahi aur **Active** hai ya nahi, check karo. Nahi hai to Step 4 se add karo |
| `www` wala nahi khul raha, bina `www` khul raha hai | `www.<domain>` alag se custom domain me add karna padta hai |
| `rajputra.co` kuch jagah GoDaddy parking page dikha raha hai | `.co` registry me Cloudflare nameservers aa chuke hain, bas purana cache baaki hai. 24 ghante me apne aap theek ho jayega |
| Purani GoDaddy parking page dikh rahi hai | Browser/DNS cache hai. Incognito me kholo, ya `ipconfig /flushdns` chalao |
