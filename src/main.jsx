import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './routes/routes.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)

/*
Seccions essencials pel teu portfoli (adaptades a la teva situació)

Hero / Intro (a la capçalera)

Una línia clara amb qui ets i què fas.



About Me

Explica qui ets, d'on vens, què t’apassiona de la programació, i potser una mica del teu background.

Aquí pots destacar la teva formació (autoaprenentatge, cursos com freeCodeCamp i Midudev).

Menció especial si tens cap altra experiència rellevant, encara que no sigui en desenvolupament (ex. atenció al client, disseny, educació...).


Projects

Mostra 3 projectes personals destacats. Prioritza qualitat sobre quantitat.

Cada projecte hauria d’incloure:

Captura de pantalla o demo en viu

Descripció clara del projecte

Quines tecnologies has utilitzat

Repte principal que vas resoldre

Repositori de GitHub i/o enllaç al projecte


Skills / Tech Stack


Mostra les tecnologies que domines:

Ex: React, TypeScript, Zustand, Node.js, Tailwind, Vite, Next.js, etc
*/

