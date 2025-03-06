document.addEventListener("DOMContentLoaded", () => {
    const examList = document.getElementById("exam-list");
    const exams = [
        { name: "2023年度 計算機アーキテクチャ", file: "assets/comp_arch_2023.pdf" },
        { name: "2022年度 制御工学", file: "assets/control_eng_2022.pdf" }
    ];

    exams.forEach(exam => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${exam.file}" target="_blank">${exam.name}</a>`;
        examList.appendChild(li);
    });
});
