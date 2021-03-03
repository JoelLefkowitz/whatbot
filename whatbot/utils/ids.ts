export function isSingleId(id: string): boolean {
    return id.endsWith("@s.whatsapp.net");
}

export function isGroupId(id: string): boolean {
    return id.endsWith("@g.us");
}
