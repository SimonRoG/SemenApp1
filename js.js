document.addEventListener('DOMContentLoaded', function () {

    const content = document.getElementById('content');
    fetch('Stellenanzeigen.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const div = document.createElement('div');
                div.textContent = item.Name;

                let karriereDiv = document.createElement('div');
                karriereDiv.id = 'karriere';
                karriereDiv.className = 'stellenanzeige ' + item.Tags;

                let ueberschriftDiv = document.createElement('div');
                ueberschriftDiv.className = 'ueberschrift';

                let ueberschriftH2 = document.createElement('h2');
                ueberschriftDiv.appendChild(ueberschriftH2);
                ueberschriftH2.textContent = item.Name;

                let unterueberschriftDiv = document.createElement('div');
                unterueberschriftDiv.className = 'unterueberschrift';

                let unterueberschriftP = document.createElement('p');
                unterueberschriftDiv.appendChild(unterueberschriftP);
                unterueberschriftP.textContent = 'Standorte: ' + item.Standort;

                let karriereBoxDiv = document.createElement('div');
                karriereBoxDiv.className = 'karriereBox';

                let stellenanzeigeLinksDiv = document.createElement('div');
                karriereBoxDiv.appendChild(stellenanzeigeLinksDiv);
                stellenanzeigeLinksDiv.className = 'stellenanzeigeLinks';

                let imgElement = document.createElement('img');
                stellenanzeigeLinksDiv.appendChild(imgElement);
                imgElement.src = 'Bilder/' + item.Bild;
                imgElement.alt = item.Bild;

                let stellenanzeigeRechtsDiv = document.createElement('div');
                karriereBoxDiv.appendChild(stellenanzeigeRechtsDiv);
                stellenanzeigeRechtsDiv.className = 'stellenanzeigeRechts';

                let stellenanzeigeRechtsH2 = document.createElement('h2');
                stellenanzeigeRechtsDiv.appendChild(stellenanzeigeRechtsH2);
                stellenanzeigeRechtsH2.textContent = item.Beschreibung;

                let stellenanzeigeRechtsP = document.createElement('p');
                stellenanzeigeRechtsDiv.appendChild(stellenanzeigeRechtsP);
                stellenanzeigeRechtsP.innerHTML = '<b>Deine Aufgaben:</b>';

                let aufgabenUl = document.createElement('ul');
                stellenanzeigeRechtsDiv.appendChild(aufgabenUl);

                Aufgaben = item.Aufgaben.split('\n')
                Aufgaben.forEach(Aufgabe => {
                    let aufgabenLi = document.createElement('li');
                    aufgabenUl.appendChild(aufgabenLi);
                    aufgabenLi.textContent = Aufgabe;
                });

                let eigenschaftenDiv = document.createElement('div');
                eigenschaftenDiv.className = 'Eigenschaften';

                let eigenschaftenH2 = document.createElement('h2');
                eigenschaftenDiv.appendChild(eigenschaftenH2);
                eigenschaftenH2.innerHTML = '<b>Das solltest du mitbringen:</b>';

                let mitbringenUl = document.createElement('ul');
                eigenschaftenDiv.appendChild(mitbringenUl);

                Eigenschaften = item.Eigenschaften.split('\n');
                Eigenschaften.forEach(Eigenschaft => {
                    let mitbringenLi = document.createElement('li');
                    mitbringenUl.appendChild(mitbringenLi);
                    mitbringenLi.textContent = Eigenschaft;
                });

                let interesseH2 = document.createElement('h2');
                eigenschaftenDiv.appendChild(interesseH2);
                interesseH2.textContent = 'Wir konnten dein Interesse wecken? Dann möchten wir Dich für uns gewinnen! Bewirb dich unter hr@b-a-e.eu!';

                karriereDiv.appendChild(ueberschriftDiv);
                karriereDiv.appendChild(unterueberschriftDiv);
                karriereDiv.appendChild(karriereBoxDiv);
                karriereDiv.appendChild(eigenschaftenDiv);

                content.appendChild(karriereDiv);
            });
        })


});
