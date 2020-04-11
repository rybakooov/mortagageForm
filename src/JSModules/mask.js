export default {
  date: { 
    mask: Date, 
    min: new Date(1900, 0, 1), 
    max: new Date(2040, 0, 1), 
  },
  rusChars: {

  },
  email: {

  },
  phone: {
    mask: '+{7} (000) 000-00-00'
  },
  passSeria: {
    mask: '0000'
  },
  passNumber: {
    mask: '000000'
  },
  passCode: {
    mask: '000-000'
  },
  rub: {
    mask: Number,
    //thousandsSeparator: ' ',
  },
  inn: {
    mask: '000000000000'
  },
  snils: {
    mask: '000-000-000 00'
  },
  index: {
    mask: '000000'
  },
  codeDivision: {

  }
}