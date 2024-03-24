export const truncate = (
    str: string,
    { length = str.length, omission = '' }: {
        length?: number,
        omission?: string
    }
) => {
    const overflow = str.length > length;
    const value = overflow ? str.substring(0, length) : str;
    return overflow ? value + omission : value;
};