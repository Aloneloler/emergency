export default function changeSkin(dataOption, skinName) {
  switch (skinName) {
    case "dianbanma":
      dataOption.color = [
        "#FFC90E",
        "#05A8D1",
        "#D1D1D3",
        "#2EA2AA",
        "#2344FE",
        "#8672d5",
        "#FFC90E",
        "#05A8D1",
        "#D1D1D3",
        "#2EA2AA",
        "#2344FE",
        "#8672d5"
      ];
      break;
    case "mobike":
      dataOption.color = [
        "black",
        "#AF0F21",
        "#AF0F21",
        "#AF0F21",
        "#D1D1D3",
        "#2EA2AA",
        "#2344FE",
        "#8672d5",
        "black",
        "#AF0F21",
        "#AF0F21",
        "#AF0F21",
        "#D1D1D3",
        "#2EA2AA",
        "#2344FE",
        "#8672d5"
      ];
      break;
    case "xiangshu":
      dataOption.color = [
        "#2463d5",
        "#94baf9",
        "#1d3c6a",
        "#dc4e41",
        "#221e1e",
        "#1da1f2",
        "#8672d5",
        "#d02e2a",
        "#ff5700"
      ];
      break;
    case "dataojo":
      dataOption.color = [
        "#30cfe7",
        "#0c9dd7",
        "#0b74d8",
        "#003ab3",
        "#3761bc",
        "#6892ed",
        "#87c9f2",
        "#c0b8b0"
      ];
      break;
    default:
  }
  return dataOption;
}
