export type VCardContact = {
    name : string;
    org : string;
    title : string;
    phone : string;
    address : string;
    email : string;
    url : string;
};

const makeVCardVersion = () => `VERSION:3.0`;
const makeVCardName = (name:string) => `FN:${name}`;
const makeVCardOrg = (org:string) => `ORG:${org}`;
const makeVCardTitle = (title:string) => `TITLE:${title}`;
const makeVCardTel = (phone:string) => `TEL;TYPE=WORK,VOICE:${phone}`;
const makeVCardAdr = (address:string) => `ADR;TYPE=WORK,PREF:;;${address}`;
const makeVCardEmail = (email:string) => `EMAIL:${email}`;
const makeVCardURL = (url:string) => `URL:${url}`;
const makeVCardTimeStamp = () => `REV:${new Date().toISOString()}`;

export function makeVCard({ name, org, title, phone, address, email, url }: VCardContact): string {
    return [
        'BEGIN:VCARD',
        makeVCardVersion(),
        makeVCardName(name),
        makeVCardOrg(org),
        makeVCardTitle(title),
        makeVCardTel(phone),
        makeVCardAdr(address),
        makeVCardEmail(email),
        makeVCardURL(url),
        makeVCardTimeStamp(),
        'END:VCARD',
    ].join('\n');
}

export function downloadVCard(contact: VCardContact){
    if(typeof window === 'undefined') return; //SSR guard - no window/document on the server

    const vcard = makeVCard(contact);
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const link = document.createElement('a');

    link.href = URL.createObjectURL(blob);
    link.download = `${contact.name}_vcard.vcf`;
    document.body.appendChild(link); //Firefox needs the link in the DOM before .click()
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
}