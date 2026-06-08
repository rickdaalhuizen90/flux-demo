import './App.css';
import type { ReactElement } from "react";
import { DEFAULT_CONFIG, useTableConfig } from "./context/TableConfigContext.tsx";
import { Scene } from "./components/Scene.tsx";

const MAX_LENGTH = DEFAULT_CONFIG.top.dimensions.length * 1.5;
const MAX_WIDTH  = DEFAULT_CONFIG.top.dimensions.width  * 1.5;
const MAX_HEIGHT = DEFAULT_CONFIG.top.dimensions.height * 2;

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const App = (): ReactElement => {
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
                                min={MAX_LENGTH / 2}
                                max={MAX_LENGTH}
                                value={config.top.dimensions.length}
                                onChange={(e) => setDimensions({ length: clamp(Number(e.target.value), MAX_LENGTH / 2, MAX_LENGTH) })}
                            />
                        </label>
                        <label className="dimension-input">
                            <span className="dimension-input__label">Breedte</span>
                            <input
                                className="dimension-input__field"
                                type="number"
                                min={MAX_WIDTH / 2}
                                max={MAX_WIDTH}
                                value={config.top.dimensions.width}
                                onChange={(e) => setDimensions({ width: clamp(Number(e.target.value), MAX_WIDTH / 2, MAX_WIDTH) })}
                            />
                        </label>
                        <label className="dimension-input">
                            <span className="dimension-input__label">Dikte</span>
                            <input
                                className="dimension-input__field"
                                type="number"
                                min={MAX_HEIGHT / 2}
                                max={MAX_HEIGHT}
                                value={config.top.dimensions.height}
                                onChange={(e) => setDimensions({ height: clamp(Number(e.target.value), MAX_HEIGHT / 2, MAX_HEIGHT) })}
                            />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
