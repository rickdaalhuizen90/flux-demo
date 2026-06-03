import './App.css';
import { useTableConfig } from "./context/TableConfigContext.tsx";
import { Scene } from "./components/Scene.tsx";

const App = () => {
    const { config, setShape, setLegs, setMaterial, setDimensions } = useTableConfig();

    return (
        <>
            {/* TODO: Add Sidebar with form elements */}
            <fieldset>
                <legend>Vorm</legend>
                <button onClick={() => setShape("round")}>Rond</button>
                <button onClick={() => setShape("rectangle")}>Rechthoek</button>
            </fieldset>

            <fieldset>
                <legend>Tafelpoot</legend>
                <button onClick={() => setLegs("ankara")}>Ankara</button>
                <button onClick={() => setLegs("san_diego")}>San Diego</button>
            </fieldset>

            <fieldset>
                <legend>Materiaal</legend>
                <button onClick={() => setMaterial("oak")}>Oak</button>
                <button onClick={() => setMaterial("walnut")}>Walnut</button>
            </fieldset>

            <fieldset>
                <legend>Afmetingen</legend>
                <label>
                    Lengte
                    <input
                        type="number"
                        min={100}
                        max={130}
                        value={config.top.dimensions.length}
                        onChange={(e) => setDimensions({ length: Number(e.target.value) })}
                    />
                </label>
                <label>
                    Breedte
                    <input
                        type="number"
                        min={200}
                        max={250}
                        value={config.top.dimensions.width}
                        onChange={(e) => setDimensions({width: Number(e.target.value)})}
                    />
                </label>
                <label>
                    Dikte
                    <input
                        type="number"
                        min={5}
                        max={10}
                        value={config.top.dimensions.height}
                        onChange={(e) => setDimensions({height: Number(e.target.value)})}
                    />
                </label>
            </fieldset>
            <Scene/>
        </>
    );
};

export default App;
