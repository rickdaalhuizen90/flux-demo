import './App.css';
import { useTableConfig } from "./context/TableConfigContext.tsx";
import { Scene } from "./components/Scene.tsx";
import type {ReactElement} from "react";

const App = (): ReactElement<string> => {
    const { config, setShape, setLegs, setMaterial, setDimensions } = useTableConfig();

    return (
        <div className="product-page">
            <div className="product-page__viewer">
                <Scene />
            </div>

            <div className="product-page__config">
                <h1 className="product-page__title">Tafel configurator</h1>

                <div className="config-section">
                    <h2 className="config-section__title">Vorm</h2>
                    <div className="config-section__options">
                        <button
                            className={`option-button${config.top.shape === 'round' ? ' option-button--active' : ''}`}
                            onClick={() => setShape("round")}
                        >
                            Rond
                        </button>
                        <button
                            className={`option-button${config.top.shape === 'rectangle' ? ' option-button--active' : ''}`}
                            onClick={() => setShape("rectangle")}
                        >
                            Rechthoek
                        </button>
                    </div>
                </div>

                <div className="config-section">
                    <h2 className="config-section__title">Tafelpoot</h2>
                    <div className="config-section__options">
                        <button
                            className={`option-button${config.legs === 'ankara' ? ' option-button--active' : ''}`}
                            onClick={() => setLegs("ankara")}
                        >
                            Ankara
                        </button>
                        <button
                            className={`option-button${config.legs === 'san_diego' ? ' option-button--active' : ''}`}
                            onClick={() => setLegs("san_diego")}
                        >
                            San Diego
                        </button>
                    </div>
                </div>

                <div className="config-section">
                    <h2 className="config-section__title">Materiaal</h2>
                    <div className="config-section__options">
                        <button
                            className={`option-button${config.top.material === 'oak' ? ' option-button--active' : ''}`}
                            onClick={() => setMaterial("oak")}
                        >
                            Eiken
                        </button>
                        <button
                            className={`option-button${config.top.material === 'walnut' ? ' option-button--active' : ''}`}
                            onClick={() => setMaterial("walnut")}
                        >
                            Walnoot
                        </button>
                    </div>
                </div>

                <div className="config-section">
                    <h2 className="config-section__title">Afmetingen</h2>
                    <div className="config-section__fields">
                        <label className="dimension-input">
                            <span className="dimension-input__label">Lengte</span>
                            <input
                                className="dimension-input__field"
                                type="number"
                                min={100}
                                max={130}
                                value={config.top.dimensions.length}
                                onChange={(e) => setDimensions({ length: Math.min(130, Math.max(100, Number(e.target.value))) })}
                            />
                        </label>
                        <label className="dimension-input">
                            <span className="dimension-input__label">Breedte</span>
                            <input
                                className="dimension-input__field"
                                type="number"
                                min={200}
                                max={250}
                                value={config.top.dimensions.width}
                                onChange={(e) => setDimensions({ width: Math.min(250, Math.max(200, Number(e.target.value))) })}
                            />
                        </label>
                        <label className="dimension-input">
                            <span className="dimension-input__label">Dikte</span>
                            <input
                                className="dimension-input__field"
                                type="number"
                                min={5}
                                max={10}
                                value={config.top.dimensions.height}
                                onChange={(e) => setDimensions({ height: Math.min(10, Math.max(5, Number(e.target.value))) })}
                            />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
