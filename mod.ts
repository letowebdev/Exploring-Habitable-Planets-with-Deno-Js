import { join } from 'https://deno.land/std/path/mod.ts';
import { BufReader } from 'https://deno.land/std/io/bufio.ts';

async function loadPlanetsData() {
    const path = join('exoplanets_nasa_data', 'kepler_exoplanets_nasa.csv');

    const file = await Deno.open(path);
    const bufReader = new BufReader(file);
}

await loadPlanetsData();