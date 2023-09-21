const FormatDate = (date: Date) => {
  const optionsDate: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  };

  const optionsClock: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const listDate = new Intl.DateTimeFormat("pt-BR", optionsDate).format(date);
  const listHour = new Intl.DateTimeFormat("pt-BR", optionsClock).format(date);

  return { data: listDate, hour: listHour };
};

export default FormatDate;
