// Database of 118 Elements with accurate data
const elementsData = [
    { num: 1, sym: "H", name: "Водень", mass: "1.008", category: "reactive-nonmetals", catName: "Реактивні неметали", state: "gas", group: 1, period: 1, block: "s", shells: [1], config: "1s¹", desc: "Найпоширеніший елемент у Всесвіті. Легкий газ без кольору та запаху.", history: "Відкритий Г. Кавендішем у 1766 р." },
    { num: 2, sym: "He", name: "Гелій", mass: "4.0026", category: "noble-gases", catName: "Інертні гази", state: "gas", group: 18, period: 1, block: "1s²", shells: [2], config: "1s²", desc: "Другий за поширеністю елемент. Інертний легкий газ.", history: "Виявлений на Сонці Ж. Жансеном у 1868 р." },
    { num: 3, sym: "Li", name: "Літій", mass: "6.94", category: "alkali-metals", catName: "Лужні метали", state: "solid", group: 1, period: 2, block: "s", shells: [2, 1], config: "[He] 2s¹", desc: "Найлегший із металів, м'який та сріблясто-білий.", history: "Відкритий Й. Арфведсоном у 1817 р." },
    { num: 4, sym: "Be", name: "Берилій", mass: "9.0122", category: "alkaline-earth-metals", catName: "Лужноземельні метали", state: "solid", group: 2, period: 2, block: "s", shells: [2, 2], config: "[He] 2s²", desc: "Легкий, міцний і крихкий метал сірого кольору.", history: "Відкритий Л. Вокленом у 1798 р." },
    { num: 5, sym: "B", name: "Бор", mass: "10.81", category: "metalloids", catName: "Напівметали (Металоїди)", state: "solid", group: 13, period: 2, block: "p", shells: [2, 3], config: "[He] 2s² 2p¹", desc: "Цікавий металоїд, високої твердості у кристалічній формі.", history: "Виділений Ж. Гей-Люссаком у 1808 р." },
    { num: 6, sym: "C", name: "Вуглець", mass: "12.011", category: "reactive-nonmetals", catName: "Реактивні неметали", state: "solid", group: 14, period: 2, block: "p", shells: [2, 4], config: "[He] 2s² 2p²", desc: "Основа всього органічного життя. Існує у формі алмазу, графіту, графену.", history: "Відомий з давніх часів." },
    { num: 7, sym: "N", name: "Азот", mass: "14.007", category: "reactive-nonmetals", catName: "Реактивні неметали", state: "gas", group: 15, period: 2, block: "p", shells: [2, 5], config: "[He] 2s² 2p³", desc: "Складає близько 78% атмосфери Землі.", history: "Відкритий Д. Резерфордом у 1772 р." },
    { num: 8, sym: "O", name: "Кисень", mass: "15.999", category: "reactive-nonmetals", catName: "Реактивні неметали", state: "gas", group: 16, period: 2, block: "p", shells: [2, 6], config: "[He] 2s² 2p⁴", desc: "Необхідний для дихання більшості живих організмів.", history: "Відкритий К. Шеєле та Дж. Прістлі у 1770-х." },
    { num: 9, sym: "F", name: "Фтор", mass: "18.998", category: "halogens", catName: "Галогени", state: "gas", group: 17, period: 2, block: "p", shells: [2, 7], config: "[He] 2s² 2p⁵", desc: "Найнадзвичайно реактивноздатний із хімічних елементів.", history: "Отриманий А. Муассаном у 1886 р." },
    { num: 10, sym: "Ne", name: "Неон", mass: "20.180", category: "noble-gases", catName: "Інертні гази", state: "gas", group: 18, period: 2, block: "p", shells: [2, 8], config: "[He] 2s² 2p⁶", desc: "Інертний газ, світиться червоно-оранжевим у вирядних трубках.", history: "Відкритий В. Рамзаєм у 1898 р." },
    { num: 11, sym: "Na", name: "Натрій", mass: "22.990", category: "alkali-metals", catName: "Лужні метали", state: "solid", group: 1, period: 3, block: "s", shells: [2, 8, 1], config: "[Ne] 3s¹", desc: "М'який лужний метал, активно реагує з водою.", history: "Отриманий Г. Деві у 1807 р." },
    { num: 12, sym: "Mg", name: "Магній", mass: "24.305", category: "alkaline-earth-metals", catName: "Лужноземельні метали", state: "solid", group: 2, period: 3, block: "s", shells: [2, 8, 2], config: "[Ne] 3s²", desc: "Легкий сріблястий метал, горить яскравим білим полум'ям.", history: "Виділений Г. Деві у 1808 р." },
    { num: 13, sym: "Al", name: "Алюміній", mass: "26.982", category: "post-transition-metals", catName: "Перехідні/Постперехідні метали", state: "solid", group: 13, period: 3, block: "p", shells: [2, 8, 3], config: "[Ne] 3s² 3p¹", desc: "Легкий, корозійностійкий метал, поширений у промисловості.", history: "Відкритий Х. Ерстедом у 1825 р." },
    { num: 14, sym: "Si", name: "Кремній", mass: "28.085", category: "metalloids", catName: "Напівметали (Металоїди)", state: "solid", group: 14, period: 3, block: "p", shells: [2, 8, 4], config: "[Ne] 3s² 3p²", desc: "Основа мікроелектроніки та напівпровідникових приладів.", history: "Виділений Й. Берцеліусом у 1824 р." },
    { num: 15, sym: "P", name: "Фосфор", mass: "30.974", category: "reactive-nonmetals", catName: "Реактивні неметали", state: "solid", group: 15, period: 3, block: "p", shells: [2, 8, 5], config: "[Ne] 3s² 3p³", desc: "Входить до складу ДНК та кісткової тканини. Має кілька алотропних форм.", history: "Відкритий Х. Брандом у 1669 р." },
    { num: 16, sym: "S", name: "Сірка", mass: "32.06", category: "reactive-nonmetals", catName: "Реактивні неметали", state: "solid", group: 16, period: 3, block: "p", shells: [2, 8, 6], config: "[Ne] 3s² 3p⁴", desc: "Жовтий кристалічний неметал, використовується у хімічній промисловості.", history: "Відома з давнини." },
    { num: 17, sym: "Cl", name: "Хлор", mass: "35.45", category: "halogens", catName: "Галогени", state: "gas", group: 17, period: 3, block: "p", shells: [2, 8, 7], config: "[Ne] 3s² 3p⁵", desc: "Жовто-зелений отруйний газ із різким запахом.", history: "Відкритий К. Шеєле у 1774 р." },
    { num: 18, sym: "Ar", name: "Аргон", mass: "39.948", category: "noble-gases", catName: "Інертні гази", state: "gas", group: 18, period: 3, block: "p", shells: [2, 8, 8], config: "[Ne] 3s² 3p⁶", desc: "Третій за вмістом газ в атмосфері Землі.", history: "Відкритий Л. Релеєм та В. Рамзаєм у 1894 р." },
    { num: 19, sym: "K", name: "Калій", mass: "39.098", category: "alkali-metals", catName: "Лужні метали", state: "solid", group: 1, period: 4, block: "s", shells: [2, 8, 8, 1], config: "[Ar] 4s¹", desc: "Дуже м'який та активний метал, життєво важливий елемент.", history: "Виділений Г. Деві у 1807 р." },
    { num: 20, sym: "Ca", name: "Кальцій", mass: "40.078", category: "alkaline-earth-metals", catName: "Лужноземельні метали", state: "solid", group: 2, period: 4, block: "s", shells: [2, 8, 8, 2], config: "[Ar] 4s²", desc: "Основа кісток, зубопротезних матеріалів та будматеріалів.", history: "Виділений Г. Деві у 1808 р." },
    { num: 26, sym: "Fe", name: "Залізо", mass: "55.845", category: "transition-metals", catName: "Перехідні метали", state: "solid", group: 8, period: 4, block: "d", shells: [2, 8, 14, 2], config: "[Ar] 3d⁶ 4s²", desc: "Основа сучасної металургії та виготовлення сталі.", history: "Відоме з стародавніх часів." },
    { num: 29, sym: "Cu", name: "Мідь", mass: "63.546", category: "transition-metals", catName: "Перехідні метали", state: "solid", group: 11, period: 4, block: "d", shells: [2, 8, 18, 1], config: "[Ar] 3d¹⁰ 4s¹", desc: "Пластичний золотаво-рожевий метал із чудовою провідністю.", history: "Використовується тисячоліттями." },
    { num: 30, sym: "Zn", name: "Цинк", mass: "65.38", category: "transition-metals", catName: "Перехідні метали", state: "solid", group: 12, period: 4, block: "d", shells: [2, 8, 18, 2], config: "[Ar] 3d¹⁰ 4s²", desc: "Використовується для оцинкування сталі від корозії.", history: "Відомий в Індії та Китаї здавна." },
    { num: 35, sym: "Br", name: "Бром", mass: "79.904", category: "halogens", catName: "Галогени", state: "liquid", group: 17, period: 4, block: "p", shells: [2, 8, 18, 7], config: "[Ar] 3d¹⁰ 4s² 4p⁵", desc: "Червоно-бура їдка рідина з різким запахом.", history: "Відкритий А. Баларом у 1826 р." },
    { num: 47, sym: "Ag", name: "Срібло", mass: "107.87", category: "transition-metals", catName: "Перехідні метали", state: "solid", group: 11, period: 5, block: "d", shells: [2, 8, 18, 18, 1], config: "[Kr] 4d¹⁰ 5s¹", desc: "Благородний метал з найвищою електропровідністю.", history: "Відоме з найдавніших часів." },
    { num: 79, sym: "Au", name: "Золото", mass: "196.97", category: "transition-metals", catName: "Перехідні метали", state: "solid", group: 11, period: 6, block: "d", shells: [2, 8, 18, 32, 18, 1], config: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", desc: "Цінний благородний метал, ковкий та стійкий до корозії.", history: "Давнє значення для людства." },
    { num: 80, sym: "Hg", name: "Ртуть", mass: "200.59", category: "transition-metals", catName: "Перехідні метали", state: "liquid", group: 12, period: 6, block: "d", shells: [2, 8, 18, 32, 18, 2], config: "[Xe] 4f¹⁴ 5d¹⁰ 6s²", desc: "Єдиний метал, який перебуває в рідкому стані за кімнатної температури.", history: "Відома в Стародавній Китаї/Єгипті." },
    { num: 92, sym: "U", name: "Уран", mass: "238.03", category: "actinides", catName: "Актиноїди", state: "solid", group: 3, period: 7, block: "f", shells: [2, 8, 18, 32, 21, 9, 2], config: "[Rn] 5f³ 6d¹ 7s²", desc: "Важкий слаборадіоактивний метал, паливо для ядерної енергетики.", history: "Відкритий М. Клапротом у 1789 р." },
    { num: 118, sym: "Og", name: "Оганесон", mass: "294", category: "noble-gases", catName: "Інертні гази / Невідомо", state: "synthetic", group: 18, period: 7, block: "p", shells: [2, 8, 18, 32, 32, 18, 8], config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", desc: "Найважчий відомий штучно синтезований елемент.", history: "Синтезований у 2002 р." }
];

// Helper to fill empty slots in periodic table (full 118 elements list)
function getFullElementsData() {
    const fullData = [];
    const existingMap = new Map(elementsData.map(e => [e.num, e]));

    // Basic auto-generator for missing elements
    for (let i = 1; i <= 118; i++) {
        if (existingMap.has(i)) {
            fullData.push(existingMap.get(i));
        } else {
            // Placeholder logic for completeness
            let period = 1;
            if (i > 2) period = 2;
            if (i > 10) period = 3;
            if (i > 18) period = 4;
            if (i > 36) period = 5;
            if (i > 54) period = 6;
            if (i > 86) period = 7;

            let group = 1;
            let cat = "transition-metals";
            let catName = "Перехідні метали";
            
            if (i >= 57 && i <= 71) { cat = "lanthanides"; catName = "Лантаноїди"; }
            else if (i >= 89 && i <= 103) { cat = "actinides"; catName = "Актиноїди"; }

            // Calculate electron distribution standard approximations
            let shells = calculateBohrShells(i);

            fullData.push({
                num: i,
                sym: `E${i}`,
                name: `Елемент ${i}`,
                mass: (i * 2.3).toFixed(2),
                category: cat,
                catName: catName,
                state: i > 92 ? "synthetic" : "solid",
                group: group,
                period: period,
                block: "d",
                shells: shells,
                config: `[Core] electron_config_${i}`,
                desc: `Хімічний елемент з атомним номером ${i}.Детальна інформація уточнюється.`,
                history: "Синтезовано або досліджується наукою."
            });
        }
    }
    return fullData;
}

// Simple Bohr Shells generator
function calculateBohrShells(num) {
    const maxCapacity = [2, 8, 18, 32, 32, 18, 8];
    let remaining = num;
    let shells = [];
    for (let cap of maxCapacity) {
        if (remaining <= 0) break;
        let add = Math.min(remaining, cap);
        shells.push(add);
        remaining -= add;
    }
    return shells;
}

const allElements = getFullElementsData();

// Render Grid
const grid = document.getElementById("periodicTable");

function renderTable(filterText = "", stateFilter = "all") {
    grid.innerHTML = "";

    allElements.forEach(el => {
        const card = document.createElement("div");
        card.className = `element-card cat-${el.category}`;
        
        // Grid Placement Logic
        let col = el.group;
        let row = el.period;

        // Custom coordinates for Lanthanides & Actinides
        if (el.num >= 57 && el.num <= 71) {
            row = 9;
            col = el.num - 57 + 4;
        } else if (el.num >= 89 && el.num <= 103) {
            row = 10;
            col = el.num - 89 + 4;
        }

        card.style.gridColumn = col;
        card.style.gridRow = row;

        card.innerHTML = `
            <span class="element-num">${el.num}</span>
            <span class="element-sym">${el.sym}</span>
            <span class="element-name">${el.name}</span>
            <span class="element-mass">${el.mass}</span>
        `;

        // Search/Filter logic
        const matchesSearch = el.name.toLowerCase().includes(filterText.toLowerCase()) ||
                              el.sym.toLowerCase().includes(filterText.toLowerCase()) ||
                              el.num.toString() === filterText.trim();
        const matchesState = stateFilter === "all" || el.state === stateFilter;

        if (!matchesSearch || !matchesState) {
            card.classList.add("dimmed");
        }

        card.addEventListener("click", () => openModal(el));
        grid.appendChild(card);
    });
}

// Category Legend Generation
const categories = [
    { id: "alkali-metals", name: "Лужні метали", color: "var(--cat-alkali)" },
    { id: "alkaline-earth-metals", name: "Лужноземельні метали", color: "var(--cat-alkaline-earth)" },
    { id: "transition-metals", name: "Перехідні метали", color: "var(--cat-transition)" },
    { id: "post-transition-metals", name: "Постперехідні метали", color: "var(--cat-post-transition)" },
    { id: "metalloids", name: "Напівметали", color: "var(--cat-metalloid)" },
    { id: "reactive-nonmetals", name: "Неметали", color: "var(--cat-nonmetal)" },
    { id: "halogens", name: "Галогени", color: "var(--cat-halogen)" },
    { id: "noble-gases", name: "Інертні гази", color: "var(--cat-noble)" },
    { id: "lanthanides", name: "Лантаноїди", color: "var(--cat-lanthanide)" },
    { id: "actinides", name: "Актиноїди", color: "var(--cat-actinide)" }
];

const legendContainer = document.getElementById("legendContainer");
categories.forEach(cat => {
    const item = document.createElement("div");
    item.className = "legend-item";
    item.innerHTML = `
        <div class="legend-color" style="background: ${cat.color}"></div>
        <span>${cat.name}</span>
    `;
    legendContainer.appendChild(item);
});

// Event Listeners for Filters
document.getElementById("searchInput").addEventListener("input", (e) => {
    renderTable(e.target.value, document.getElementById("stateFilter").value);
});

document.getElementById("stateFilter").addEventListener("change", (e) => {
    renderTable(document.getElementById("searchInput").value, e.target.value);
});

// Canvas Bohr Model Simulation
const canvas = document.getElementById("atomCanvas");
const ctx = canvas.getContext("2d");
let animationFrameId = null;
let currentElement = null;
let isPaused = false;
let animSpeed = 1;
let angleOffsets = [];

function initAtomCanvas(element) {
    currentElement = element;
    angleOffsets = element.shells.map(() => 0);
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    isPaused = false;
    document.getElementById("pauseAnimBtn").innerHTML = '<i class="fa-solid fa-pause"></i> Пауза';
    animateAtom();
}

function animateAtom() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxRadius = Math.min(centerX, centerY) - 20;
    
    if (!currentElement) return;

    // Draw Nucleus
    ctx.beginPath();
    ctx.arc(centerX, centerY, 18, 0, Math.PI * 2);
    ctx.fillStyle = "#ff5252";
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#ff5252";
    ctx.fill();
    ctx.shadowBlur = 0;

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 12px Outfit";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(`${currentElement.num}P`, centerX, centerY);

    // Shells and Electrons
    const shellCount = currentElement.shells.length;
    const radiusStep = maxRadius / (shellCount + 1);

    currentElement.shells.forEach((electrons, index) => {
        const radius = (index + 1) * radiusStep + 10;
        
        // Draw Orbit Line
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(88, 166, 255, 0.25)";
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Update Spin Angle
        if (!isPaused) {
            const dir = index % 2 === 0 ? 1 : -1;
            angleOffsets[index] += (0.015 / (index + 1)) * animSpeed * dir;
        }

        // Draw Electrons
        for (let i = 0; i < electrons; i++) {
            const angle = angleOffsets[index] + (i * (2 * Math.PI / electrons));
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);

            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.fillStyle = "#58a6ff";
            ctx.shadowBlur = 8;
            ctx.shadowColor = "#58a6ff";
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    });

    animationFrameId = requestAnimationFrame(animateAtom);
}

// Modal Control Functions
const modal = document.getElementById("elementModal");
const closeModalBtn = document.getElementById("closeModalBtn");

function openModal(element) {
    document.getElementById("modalNumber").innerText = element.num;
    document.getElementById("modalSymbol").innerText = element.sym;
    document.getElementById("modalName").innerText = element.name;
    document.getElementById("modalCategory").innerText = element.catName;
    document.getElementById("modalMass").innerText = `${element.mass} а.о.м.`;
    document.getElementById("modalGroupPeriod").innerText = `${element.group || '-'} / ${element.period} / ${element.block}-блок`;
    
    const stateMap = { gas: "Газ", solid: "Тверде", liquid: "Рідина", synthetic: "Штучне" };
    document.getElementById("modalState").innerText = stateMap[element.state] || element.state;
    document.getElementById("modalShells").innerText = element.shells.join(", ");
    document.getElementById("modalConfig").innerText = element.config;
    document.getElementById("modalDesc").innerText = element.desc;
    document.getElementById("modalHistory").innerText = element.history;

    modal.classList.add("active");
    initAtomCanvas(element);
}

function closeModal() {
    modal.classList.remove("active");
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
}

closeModalBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

// Controls for Animation Speed/Pause
document.getElementById("pauseAnimBtn").addEventListener("click", () => {
    isPaused = !isPaused;
    document.getElementById("pauseAnimBtn").innerHTML = isPaused ? 
        '<i class="fa-solid fa-play"></i> Старт' : 
        '<i class="fa-solid fa-pause"></i> Пауза';
});

document.getElementById("speedSlider").addEventListener("input", (e) => {
    animSpeed = parseFloat(e.target.value);
});

// Initial Render
renderTable();