// Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de Internet (em Mbps),
// calcule e informe o tempo aproximado de download do arquivo usando este link (em minutos).

const tamArquivoMb = 100
const veloInternetMbps = 500
const tempoDownload = (tamArquivoMb / veloInternetMbps).toFixed(2)

console.log(`Sua internet de ${veloInternetMbps}Mbps demora ${tempoDownload} segundos para baixar um arquivo de ${tamArquivoMb}Mb`)