const hMaps = document.querySelectorAll(".h-map")

if (hMaps) {
    hMaps.forEach(hMap => {
        const mapIframes = hMap.querySelectorAll(".h-map-iframe .map")
        const mapScroll = hMap.querySelector(".h-map-scroll")
        const mapItems = hMap.querySelectorAll(".h-map-cs-it")
        mapItems.forEach(mapItem => {
            setHeight(mapItem);
            mapItem.addEventListener("click", () => {
                setHeight(mapItem);
            })
            window.addEventListener("resize", () => {
                setHeight(mapItem);
            })
        })
        function setHeight(item) {
            const mapHei = item.clientHeight;
            mapScroll.style.maxHeight = mapHei * 2 + "px"
            mapIframes.forEach(mapIframe => {
                mapIframe.style.height = mapHei * 2 + 32 + "px";
            })
        }

    })
}


let speedGrids = [];
const gridWidth = document.querySelectorAll(".slideJs");
function getWidthGrid() {
    document.querySelectorAll(".getWidthGrid").forEach((e, s) => {
        e.style = `--width:${e.getBoundingClientRect().width}px; --speedGrid:${speedGrids[s]
            }s`;
    });
}
gridWidth.forEach((e) => {
    e = e.clientWidth / 10;
    speedGrids.push(e);
}),
    getWidthGrid(),
    window.addEventListener("resize", () => {
        getWidthGrid();
    });
// ================== JS PW
const signPws = document.querySelectorAll(".signPW")
console.log(signPws.innerHTML);

if (signPws) {
    signPws.forEach(signPw => {
        let clicked = false
        document.addEventListener("click", (e) => {
            if (signPw.contains(e.target)) {
                const signIp = signPw.closest(".form-ip").querySelector("input")

                if (clicked == false) {
                    signPw.classList.add("clicked")
                    signIp.setAttribute("type", "text")
                    clicked = true
                }
                else {
                    signPw.classList.remove("clicked")
                    signIp.setAttribute("type", "password")
                    clicked = false;
                }
            }
        })
    })
}