import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table';

function CalculadoraIntegral() {
    //Estados del los inputs iniciales
    const [potenciaDelPanel, setPotenciaDelPanel] = useState(0);
    const [cantidadDePaneles, setCantidadDePaneles] = useState(0);
    const [inversor, setInversor] = useState(0);
    const [bateria, setBateria] = useState(0);
    const [cantidadBaterias, setCantidadBaterias] = useState(0);
    const [estructuraCableado, setEstructuraCableado] = useState(0);
    const [instalacionBase, setInstalacionBase] = useState(0);
    const [pesoEnvio, setPesoEnvio] = useState(0);
    const [tipoDeTecho, setTipoDeTecho] = useState('');
    const [region, setRegion] = useState('');
    const [complejidadInstalacion, setComplejidadInstalacion] = useState('');
    const [subsidio, setSubsidio] = useState('');
    const [metodoDeEnvio, setMetodoDeEnvio] = useState('');
    const [garantia, setGarantia] = useState('');
    const [planDePago, setPlanDePago] = useState('');
    const [tipoDePie, setTipoDePie] = useState('');
    const [valorDePie, setValorDePie] = useState('');

    // Constantes y factores
    const factoresTipoTecho = {
        'teja': 0.05,
        'zinc': 0.02,
        'hormigon': 0.07
    };
    const costosEnvioRegion = {
        'rm': 5000,
        'norte': 9000,
        'sur': 10000,
        'austral': 15000
    };
    const factoresComplejidadInstalacion = {
        'baja': 0.00,
        'media': 0.08,
        'alta': 0.15
    };
    const factoresSubsidio = {
        'sin': 0.00,
        'residencial': 0.08,
        'pyme': 0.05
    };
    const factoresGarantia = {
        '12': 0.02,
        '24': 0.04,
        '36': 0.06
    }
    const metodosEnvio = {
        'estandar': 1.00,
        'expres': 1.20
    }
    const planesPago = {
        'contado': { cuotas: 1, tasa: 0 },
        '6cuotas': { cuotas: 6, tasa: 0.012 },
        '12cuotas': { cuotas: 12, tasa: 0.011 },
        '24cuotas': { cuotas: 24, tasa: 0.010 }
    }

    const ivaPorcentaje = 0.19; // 19% IVA


    // Funcion reutilizable para otros campos que no deberian ser negativos
    const manejarCambioNumeroPositivo = (establecedor) => (e) => {
        const valor = parseInt(e.target.value) || 0;
        if (valor >= 0) {
            establecedor(valor);
        }
    }
    // Calculos
    const potenciaEstimadaKw = ((parseInt(potenciaDelPanel) || 0) * (parseInt(cantidadDePaneles) || 0)) / 1000;
    const subtotalEquipos = (parseInt(inversor) || 0) + ((parseInt(bateria) || 0) * (parseInt(cantidadBaterias) || 0)) + (parseInt(estructuraCableado) || 0);
    const recargoTecho = subtotalEquipos * (factoresTipoTecho[tipoDeTecho] || 0);
    const subsidioValor = subtotalEquipos * (factoresSubsidio[subsidio] || 0);
    const recargoComplejidad = (parseInt(instalacionBase) || 0) * (factoresComplejidadInstalacion[complejidadInstalacion] || 0);
    const instalacionFinal = (parseInt(instalacionBase) || 0) + recargoComplejidad;
    const baseImponible = (subtotalEquipos + recargoTecho - subsidioValor) + instalacionFinal;
    const iva = baseImponible * ivaPorcentaje;
    const costoEnvioBase = (costosEnvioRegion[region] || 0) + ((parseInt(pesoEnvio) || 0) * 700);
    const costoEnvioFinal = costoEnvioBase * (metodosEnvio[metodoDeEnvio] || 1);
    const costoGarantia = subtotalEquipos * (factoresGarantia[garantia] || 0);
    const totalAntesFinanciar = baseImponible + iva + costoEnvioFinal + costoGarantia;

    const pieCalculado = tipoDePie === 'porcentaje'
        ? totalAntesFinanciar * ((parseInt(valorDePie) || 0) / 100)
        : (parseInt(valorDePie) || 0);
    const montoFinanciar = totalAntesFinanciar - pieCalculado;
    const plan = planesPago[planDePago] || { cuotas: 1, tasa: 0 };
    const interesTotal = montoFinanciar * plan.tasa * plan.cuotas;
    const cuota = plan.cuotas > 1 ? (montoFinanciar + interesTotal) / plan.cuotas : 0;
    const totalFinal = totalAntesFinanciar + interesTotal;

    // Funcion para reiniciar el formulario
    const reiniciarFormulario = () => {
        setPotenciaDelPanel('');
        setCantidadDePaneles('');
        setInversor('');
        setBateria('');
        setCantidadBaterias('');
        setEstructuraCableado('');
        setInstalacionBase('');
        setPesoEnvio('');
        setTipoDeTecho('');
        setRegion('');
        setComplejidadInstalacion('');
        setSubsidio('');
        setMetodoDeEnvio('');
        setGarantia('');
        setPlanDePago('');
        setTipoDePie('');
        setValorDePie('');
    };
    return (

        <div className='container mt-4' id='demo-calculadora'>
            <div className='row'>
                <div className='col-12'>
                    <h2 className="titulo-destacado mb-4" style={{ textAlign: 'left' }}>DEMO calculadora</h2>
                    <p className='parrafo-calcularora' style={{ textAlign: 'right' }}>Maquetado de formulario y resumen.(Sin logica JS en este mockup).</p>
                </div>
            </div>

            <div className='row'>
                {/* Container del Formulario con fondo blanco */}
                <div className='col-lg-6'>
                    <div className="bg-white p-4 rounded shadow-sm mb-4" style={{ border: '1px solid #dee2e6' }}>
                        <h4>Formulario</h4>

                        <div className='row'>
                            <div className='col-md-6 mb-3'>
                                <label className='form-label'>Potencia del panel (W)</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    value={potenciaDelPanel}
                                    onChange={manejarCambioNumeroPositivo(setPotenciaDelPanel)}
                                    placeholder='450'
                                />
                            </div>
                            <div className='col-md-6 mb-3'>
                                <label className='form-label'>Cantidad de paneles</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    value={cantidadDePaneles}
                                    onChange={manejarCambioNumeroPositivo(setCantidadDePaneles)}
                                    placeholder='9'
                                />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-6 mb-3'>
                                <label className='form-label'>Inversor (precio)</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    value={inversor}
                                    onChange={manejarCambioNumeroPositivo(setInversor)}
                                    placeholder='650000'
                                />
                            </div>
                            <div className='col-md-6 mb-3'>
                                <label className='form-label'>Batería (precio unidad)</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    value={bateria}
                                    onChange={manejarCambioNumeroPositivo(setBateria)}
                                    placeholder='320000'
                                />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-6 mb-3'>
                                <label className='form-label'>Cantidad baterías</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    value={cantidadBaterias}
                                    onChange={manejarCambioNumeroPositivo(setCantidadBaterias)}
                                    placeholder='1'
                                />
                            </div>
                            <div className='col-md-6 mb-3'>
                                <label className='form-label'>Estruct./cableado</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    value={estructuraCableado}
                                    onChange={manejarCambioNumeroPositivo(setEstructuraCableado)}
                                    placeholder='180000'
                                />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-6 mb-3'>
                                <label className='form-label'>Instalación base</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    value={instalacionBase}
                                    onChange={manejarCambioNumeroPositivo(setInstalacionBase)}
                                    placeholder='350000'
                                />
                            </div>
                            <div className='col-md-6 mb-3'>
                                <label className='form-label'>Peso envío (kg)</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    value={pesoEnvio}
                                    onChange={manejarCambioNumeroPositivo(setPesoEnvio)}
                                    placeholder='90'
                                    min={0}
                                />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-6 mb-3'>
                                <label className='form-label'>Tipo de techo</label>
                                <select
                                    className='form-select'
                                    value={tipoDeTecho}
                                    onChange={(e) => setTipoDeTecho(e.target.value)}
                                >
                                    <option value="">Seleccione tipo de techo</option>
                                    <option value="teja">Teja/Asfalto (+5%)</option>
                                    <option value="zinc">Zinc/Planchas (+2%)</option>
                                    <option value="hormigon">Hormigón (+7%)</option>
                                </select>
                            </div>
                            <div className='col-md-6 mb-3'>
                                <label className='form-label'>Región</label>
                                <select
                                    className='form-select'
                                    value={region}
                                    onChange={(e) => setRegion(e.target.value)}
                                >
                                    <option value="">Seleccione región</option>
                                    <option value="rm">RM ($5.000)</option>
                                    <option value="norte">Norte ($9.000)</option>
                                    <option value="sur">Sur ($10.000)</option>
                                    <option value="austral">Austral ($15.000)</option>
                                </select>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-6 mb-3'>
                                <label className='form-label'>Complejidad instalación</label>
                                <select
                                    className='form-select'
                                    value={complejidadInstalacion}
                                    onChange={(e) => setComplejidadInstalacion(e.target.value)}
                                >
                                    <option value="">Seleccione complejidad</option>
                                    <option value="baja">Baja (0%)</option>
                                    <option value="media">Media (+8%)</option>
                                    <option value="alta">Alta (+15%)</option>
                                </select>
                            </div>
                            <div className='col-md-6 mb-3'>
                                <label className='form-label'>Subsidio</label>
                                <select
                                    className='form-select'
                                    value={subsidio}
                                    onChange={(e) => setSubsidio(e.target.value)}
                                >
                                    <option value="">Seleccione subsidio</option>
                                    <option value="sin">Sin subsidio (0%)</option>
                                    <option value="residencial">Residencial (-8%)</option>
                                    <option value="pyme">Pyme (-5%)</option>
                                </select>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-6 mb-3'>
                                <label className='form-label'>Método de envío</label>
                                <select
                                    className='form-select'
                                    value={metodoDeEnvio}
                                    onChange={(e) => setMetodoDeEnvio(e.target.value)}
                                >
                                    <option value="">Seleccione método</option>
                                    <option value="estandar">Estándar (x1.00)</option>
                                    <option value="expres">Exprés (x1.20)</option>
                                </select>
                            </div>
                            <div className='col-md-6 mb-3'>
                                <label className='form-label'>Garantía</label>
                                <select
                                    className='form-select'
                                    value={garantia}
                                    onChange={(e) => setGarantia(e.target.value)}
                                >
                                    <option value="">Seleccione garantía</option>
                                    <option value="12">12 meses (+2%)</option>
                                    <option value="24">24 meses (+4%)</option>
                                    <option value="36">36 meses (+6%)</option>
                                </select>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-6 mb-3'>
                                <label className='form-label'>Plan de pago</label>
                                <select
                                    className='form-select'
                                    value={planDePago}
                                    onChange={(e) => setPlanDePago(e.target.value)}
                                >
                                    <option value="">Seleccione plan</option>
                                    <option value="contado">Contado (0%)</option>
                                    <option value="6cuotas">6 cuotas (1.2%)</option>
                                    <option value="12cuotas">12 cuotas (1.1%)</option>
                                    <option value="24cuotas">24 cuotas (1.0%)</option>
                                </select>
                            </div>
                            <div className='col-md-6 mb-3'>
                                <label className='form-label'>Tipo de pie</label>
                                <select
                                    className='form-select'
                                    value={tipoDePie}
                                    onChange={(e) => setTipoDePie(e.target.value)}
                                >
                                    <option value="">Seleccione tipo</option>
                                    <option value="porcentaje">Porcentaje</option>
                                    <option value="monto">Monto fijo</option>
                                </select>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-12 mb-3'>
                                <label className='form-label'>Valor de pie</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    value={valorDePie}
                                    onChange={(e) => setValorDePie(e.target.value)}
                                    placeholder={tipoDePie === 'porcentaje' ? '10' : '100000'}
                                />
                            </div>
                            <div>
                                <Button variant="primary"
                                    size="sm"
                                    active
                                    onClick={reiniciarFormulario}
                                    className="btn btn-info btn-lg">
                                    Reiniciar
                                </Button>
                                <Button variant="secondary" size="sm" active>
                                    Copiar resumen
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Container del Resumen con fondo gris claro */}
                <div className='col-lg-6'>
                    <div className="bg-light p-4 rounded shadow-sm" style={{ border: '1px solid #dee2e6' }}>
                        <h4>Resumen</h4>

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Concepto</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>Potencia estimada (kW)</td>
                                    <td>{isNaN(potenciaEstimadaKw) || potenciaEstimadaKw === 0 ? '$---' : potenciaEstimadaKw.toFixed(2)}</td>
                                </tr>

                                <tr>
                                    <td>Subtotal equipos</td>
                                    <td>{isNaN(subtotalEquipos) || subtotalEquipos === 0 ? '$---' : `$${subtotalEquipos.toLocaleString()}`}</td>
                                </tr>
                                <tr>
                                    <td>Instalacion base</td>
                                    <td>{isNaN(instalacionBase) || instalacionBase === 0 ? '$---' : `$${instalacionBase.toLocaleString()}`}</td>
                                </tr>


                                <tr>
                                    <td>Recargo techo</td>
                                    <td>{isNaN(recargoTecho) || recargoTecho === 0 ? '$---' : `$${recargoTecho.toLocaleString()}`}</td>
                                </tr>
                                <tr>
                                    <td>Recargo complejidad</td>
                                    <td>{isNaN(recargoComplejidad) || recargoComplejidad === 0 ? '$---' : `$${recargoComplejidad.toLocaleString()}`}</td>
                                </tr>
                                <tr>
                                    <td>Instalacion final</td>
                                    <td>{isNaN(instalacionFinal) || instalacionFinal === 0 ? '$---' : `$${instalacionFinal.toLocaleString()}`}</td>
                                </tr>
                                <tr>
                                    <td>Subsidio</td>
                                    <td>{isNaN(subsidioValor) || subsidioValor === 0 ? '$---' : `-$${Math.abs(subsidioValor).toLocaleString()}`}</td>
                                </tr>


                                <tr>
                                    <td>Base imponible</td>
                                    <td>{isNaN(baseImponible) || baseImponible === 0 ? '$---' : `$${baseImponible.toLocaleString()}`}</td>
                                </tr>
                                <tr>
                                    <td>IVA 19%</td>
                                    <td>{isNaN(iva) || iva === 0 ? '$---' : `$${iva.toLocaleString()}`}</td>
                                </tr>


                                <tr>
                                    <td>Envío</td>
                                    <td>{isNaN(costoEnvioFinal) || costoEnvioFinal === 0 ? '$---' : `$${costoEnvioFinal.toLocaleString()}`}</td>
                                </tr>
                                <tr>
                                    <td>Garantía</td>
                                    <td>{isNaN(costoGarantia) || costoGarantia === 0 ? '$---' : `$${costoGarantia.toLocaleString()}`}</td>
                                </tr>

                                <tr>
                                    <td><strong>Total antes de financiar</strong></td>
                                    <td><strong>{isNaN(totalAntesFinanciar) || totalAntesFinanciar === 0 ? '$---' : `$${totalAntesFinanciar.toLocaleString()}`}</strong></td>
                                </tr>

                                <tr>
                                    <td>Pie</td>
                                    <td>{isNaN(pieCalculado) || pieCalculado === 0 ? '$---' : `$${pieCalculado.toLocaleString()}`}</td>
                                </tr>
                                <tr>
                                    <td>Monto a financiar</td>
                                    <td>{isNaN(montoFinanciar) || montoFinanciar === 0 ? '$---' : `$${montoFinanciar.toLocaleString()}`}</td>
                                </tr>
                                <tr>
                                    <td>Interes total</td>
                                    <td>{isNaN(interesTotal) || interesTotal === 0 ? '$---' : `$${interesTotal.toLocaleString()}`}</td>
                                </tr>
                                {plan.cuotas > 1 && (
                                    <tr>
                                        <td>Cuota ({plan.cuotas} meses)</td>
                                        <td>{isNaN(cuota) || cuota === 0 ? '$---' : `$${cuota.toLocaleString()}`}</td>
                                    </tr>
                                )}

                                <tr className='table-info'>
                                    <td><strong>TOTAL FINAL</strong></td>
                                    <td><strong>{isNaN(totalFinal) || totalFinal === 0 ? '$---' : `$${totalFinal.toLocaleString()}`}</strong></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
            <br></br>
        </div>
    );
}

export default CalculadoraIntegral;