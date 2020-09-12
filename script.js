const countdown = () => {
  //instanciando a data atual, com todas as informações do dia
  const data = new Date();
  //aqui é hardcode para ter o dia exato desejado, pretendo mudar para que não seja apenas ano novo
  const diaTarget = 01;
  const mesTarget = 01;
  const anoTarget = 2021;

  //e então instancio a data que quero, para que fique um objeto bonito do mesmo jeito que o "data"
  const dataTarget = new Date(`${anoTarget}-${mesTarget}-${diaTarget}`);

  //calculo a diferença em millisegundos entre a data que quero até hoje
  const diferença = dataTarget.getTime() - data.getTime();

  //converto millisegundos para segundos, padrão
  const segundosConvertido = Math.floor(diferença / 1000);

  // 1 dia = 3600 * 24 segundos
  const diasConvertido = Math.floor(segundosConvertido / (3600 * 24));

  // converto os segundos restantes para horas (segundosConvertido - (diasConvertido * (3600 * 24)))
  const horasConvertido = Math.floor(
    (segundosConvertido - diasConvertido * (3600 * 24)) / 3600
  );

  // mesma logica da hora, só que pra minutos
  const minutosConvertido = Math.floor(
    (segundosConvertido -
      diasConvertido * (3600 * 24) -
      horasConvertido * 3600) /
      60
  );

  //pego o restante da divisão entre segundos e 60 (minutos) representado pela letra B na imagem do cáculo
  const segundos = segundosConvertido % 60;

  //retorna o resultado de qnt tempo falta em formato de string
  return `${diasConvertido} dias, ${horasConvertido} horas, ${minutosConvertido} minutos e ${segundos} segundos`;
};

const elementoTeste = document.querySelector(".contagem-text");

const mostraCountdown = () => {
  setInterval(() => {
    elementoTeste.innerHTML = countdown();
  }, 1000);
};
