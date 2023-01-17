import React from 'react'

export default function App() {
  return (
    <div className='d-flex vw-100 vh-100'>
        <div className='col-2' style={{ backgroundColor: '#FBFAFD'}}>
            <div className="container-fluid d-flex flex-column">
                <div className='mt-4 align-self-center' style={{ fontWeight: '600', fontSize: 'large' }}>
                    CLARET DEVIGNE
                </div>
                <div className='mt-5 mx-2' style={{ fontWeight: '600' }}>Input</div>
            </div>
        </div>

        <div className='col d-flex flex-column p-5'>
            <h4>
                Buttons
            </h4>
            <div>
                <div className="row mt-4">
                    <div className="col-3">
                        <p>{'<button />'}</p>
                        <button className='btn btn-secondary'>Default</button>
                    </div>
                    <div className="col">
                        <p>&:hover, $:focus</p>
                        <button className='btn' style={{ backgroundColor: '#5c646c', color: 'white' }}>Default</button>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-3">
                        <p>{'<button variant="outline" />'}</p>
                        <button className='btn btn-outline-primary'>Default</button>
                    </div>
                    <div className="col">
                        <p>&:hover, $:focus</p>
                        <button className='btn bg-primary text-white'>Default</button>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-3">
                        <p>{'<button variant="text" />'}</p>
                        <button className='btn btn-outline-primary border-0'>Default</button>
                    </div>
                    <div className="col">
                        <p>&:hover, $:focus</p>
                        <button className='btn bg-primary text-white'>Default</button>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-3">
                        <p>{'<button disableShadow />'}</p>
                        <button className='btn bg-primary text-white'>Default</button>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-3">
                        <p>{'<button disabled />'}</p>
                        <button className='btn btn-secondary' disabled>Default</button>
                    </div>
                    <div className="col">
                        <p>{'<button variant="text" disabled />'}</p>
                        <button className='btn btn-outline-secondary border-0' disabled>Default</button>
                    </div>
                </div>
                
                <div className="row mt-4">
                    <div className="col-3">
                        <p>{'<button disabled />'}</p>
                        <button className='btn btn-secondary' disabled>Default</button>
                    </div>
                    <div className="col">
                        <p>{'<button variant="text" disabled />'}</p>
                        <button className='btn btn-outline-secondary border-0' disabled>Default</button>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-5"> 
                        <p>{'<button startIcon="Local_grocery_store" />'}</p>
                        <button className='btn btn-primary'><i class="bi bi-cart-plus"></i> Default</button>
                    </div>
                    <div className="col-5"> 
                        <p>{'<button startIcon="Local_grocery_store" />'}</p>
                        <button className='btn btn-primary'>Default <i class="bi bi-cart-plus"></i></button>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-3"> 
                        <p>{'<button size="sm" />'}</p>
                        <button className='btn btn-primary btn-sm'>Default</button>
                    </div>
                    <div className="col-3"> 
                        <p>{'<button size="md" />'}</p>
                        <button className='btn btn-primary'>Default</button>
                    </div>
                    <div className="col-3"> 
                        <p>{'<button size="lg" />'}</p>
                        <button className='btn btn-primary btn-lg'>Default</button>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-3">
                        <p>{'<button color="default" />'}</p>
                        <button className='btn btn-secondary'>Default</button>
                    </div>
                    <div className="col-3">
                        <p>{'<button color="primary" />'}</p>
                        <button className='btn btn-primary'>Default</button>
                    </div>
                    <div className="col-3">
                        <p>{'<button color="secondary" />'}</p>
                        <button className='btn btn-success'>Default</button>
                    </div>
                    <div className="col-3">
                        <p>{'<button color="default" />'}</p>
                        <button className='btn btn-danger'>Default</button>
                    </div>
                </div>

                <div className="row mt-4 mb-5">
                    <div className="col-3">
                        <p>&:hover, &:focus</p>
                        <button className='btn text-white' style={{ backgroundColor: '#5d656d'}}>Default</button>
                    </div>
                    <div className="col-3">
                        <p className='text-white'>.</p>
                        <button className='btn text-white' style={{ backgroundColor: '#0d5cda'}}>Default</button>
                    </div>
                    <div className="col-3">
                        <p className='text-white'>.</p>
                        <button className='btn text-white' style={{ backgroundColor: '#147344'}}>Default</button>
                    </div>
                    <div className="col-3">
                        <p className='text-white'>.</p>
                        <button className='btn text-white' style={{ backgroundColor: '#bb2c3c'}}>Default</button>
                    </div>
                </div>

                <div className='mb-5'>
                    <p>Icons: https://icons.getbootstrap.com/</p>
                    <h6>created by Claret Devigne - devChallenge.io</h6>
                </div>

            </div>
        </div>
    </div>
  )
}
