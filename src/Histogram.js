import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";

export default function Histogram() {
 
  // eslint-disable-next-line no-unused-vars
  const [words, setWords] = useState([]);
  const [histogramData, setHistogramData] = useState(null);

  useEffect(() => {
    fetch("https://www.terriblytinytales.com/test.txt")
      .then((response) => response.text())
      .then((text) => {
        const cleanedText = text.replace(/[^\w\s]/gi, "").toLowerCase();

        const wordsArray = cleanedText.split(/\s+/);

        const frequency = {};
        wordsArray.forEach((word) => {
          frequency[word] = frequency[word] || 0;
          frequency[word]++;
        });

        const sortedWords = Object.keys(frequency).sort(
          (a, b) => frequency[b] - frequency[a]
        );

        const topWords = sortedWords.slice(0, 20);

        const data = {
          labels: topWords,
          datasets: [
            {
              label: "Word Frequency",
              data: topWords.map((word) => frequency[word]),
            },
          ],
        };
        setHistogramData(data);

        setWords(sortedWords);
      });
  }, []);

  const handleExport = () => {
    if (histogramData) {
      const csv = [
        ["Word", "Frequency"],
        ...histogramData.labels.map((label, index) => [
          label,
          histogramData.datasets[0].data[index],
        ]),
      ]
        .map((row) => row.join(","))
        .join("\n");

      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", "histogram.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div style={{ width: "50vw" }}>
      {histogramData && <Bar data={histogramData} />}
      <br />
      <br />
      <button onClick={handleExport}>Export</button>
    </div>
  );
}
