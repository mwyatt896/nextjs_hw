/// ADDRESSES AND ALIASES
export const shortenAddress = (
    address: string,
    aleo: boolean = false,
    length: number = 5
  ) => {
    if (address.length < length * 2) return address;
    return `${address.slice(
      0,
      length + (aleo ? 'aleo1'.length : 0)
    )}...${address.slice(address.length - length, address.length)}`;
  };
  