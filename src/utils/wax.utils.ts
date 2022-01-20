
export function truncateAddress(address: string) {
    return `${address.slice(0, 8)}...`;
  }
  
  export function addPrecision(num: number, precision: number): string {
    const isDecimal = num % 1 !== 0;
    let s = !isDecimal ? num + '.' : num + '';
    for (
      let decimalPlaces = s.split('.')[1].length;
      decimalPlaces < precision;
      decimalPlaces++
    ) {
      s = s + '0';
    }
  
    return s;
  }
  
  export function hexToPrependedZeros(hexAddress: string): string {
    return hexAddress.replace('0x', '000000000000000000000000');
  }
