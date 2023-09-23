const FormatDate = (date: Date) => {
  const optionsDate: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
  };

  const optionsClock: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
  };

  const listDate = new Intl.DateTimeFormat("pt-BR", optionsDate).format(date);
  const listHour = new Intl.DateTimeFormat("pt-BR", optionsClock).format(date);

  return { data: listDate, hour: listHour };
};

export default FormatDate;
