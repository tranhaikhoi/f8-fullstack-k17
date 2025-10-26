function numberToWords(num) {
  if (num < 0 || num > 9999) return "Không hợp lệ, ngoài phạm vi cho phép (0–9999)";
  function digitToWord(digit) {
    switch (digit) {
      case 0: return "không";
      case 1: return "một";
      case 2: return "hai";
      case 3: return "ba";
      case 4: return "bốn";
      case 5: return "năm";
      case 6: return "sáu";
      case 7: return "bảy";
      case 8: return "tám";
      case 9: return "chín";
      default: return "";
    }
  }

  let nghin = Math.floor(num / 1000);
  let tram = Math.floor((num % 1000) / 100);
  let chuc = Math.floor((num % 100) / 10);
  let donvi = num % 10;

  let result = "";

  if (nghin > 0) {
    result += digitToWord(nghin) + " ngàn ";
  }

  if (tram > 0) {
    result += digitToWord(tram) + " trăm ";
  } else if (nghin > 0 && (chuc > 0 || donvi > 0)) {
    result += "không trăm ";
  }


  switch (chuc) {
    case 0:
      if (donvi !== 0 && (tram > 0 || nghin > 0)) {
        result += "lẻ ";
      }
      break;
    case 1:
      result += "mười ";
      break;
    default:
      result += digitToWord(chuc) + " mươi ";
      break;
  }

  switch (donvi) {
    case 0:
      if (num === 0) result += "không";
      break;
    case 1:
      if (chuc > 1) result += "mốt";
      else result += "một";
      break;
    case 5:
      if (chuc >= 1) result += "lăm";
      else result += "năm";
      break;
    default:
      result += digitToWord(donvi);
      break;
  }

  result = result.trim();
  result = result.charAt(0).toUpperCase() + result.slice(1);

  return result;
}
console.log(numberToWords(4298)); 

