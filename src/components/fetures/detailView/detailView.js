import './detailView.scss'
import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';

const DetailView = (props) => {
    const [foodId, setFoodId] = useState();
    const [foodData, setFoodData] = useState([]);
    const getParams = () => {
        if (props.match.params) {
            setFoodId(props.match.params.id);
            fetchFoodById(props.match.params.id);
        }
    }
    const fetchFoodById = (foodId) => {
        // https://api.nal.usda.gov/fdc/v1/food/${foodId}?api_key=DEMO_KEY
        fetch(`https://api.nal.usda.gov/fdc/v1/food/${foodId}?api_key=DEMO_KEY`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setFoodData(data);
            })
    }
    useEffect(() => {
        getParams();
    }, []);

    return (
        <div className='containt'>
            <h3 className='titleLabel'>Detail View</h3>
            <div className="row ">
                <div className="col-lg-4">
                    <img className='imgView' alt='Image view' src="/images/img.JFIF"></img>
                    <h3>Food Id - {foodId} </h3>
                </div>
                <div className="col-lg-8 ">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Description</Accordion.Header>
                            <Accordion.Body className='detailViewLeft'>
                                {foodData.description}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Food Nutrients</Accordion.Header>
                            <Accordion.Body>
                                {/* <div className='row'>
                                    <div className='col-lg-12 col-md-12 col-sm-12 col-sx-12 detailViewLeft'>
                                        Name : {foodData?.foodNutrients[0].nutrient.name} <br/>
                                        Number : {foodData?.foodNutrients[0].nutrient.number} <br/>
                                        Rank : {foodData?.foodNutrients[0].nutrient.rank} <br/>
                                        Unit : {foodData?.foodNutrients[0].nutrient.unitName} <br/>
                                    </div>
                                    <hr/>
                                    <div className='col-lg-12 col-md-12 col-sm-12 col-sx-12 detailViewLeft'>
                                        Name : {foodData.foodNutrients[1].nutrient.name} <br/>
                                        Number : {foodData.foodNutrients[1].nutrient.number} <br/>
                                        Rank : {foodData.foodNutrients[1].nutrient.rank} <br/>
                                        Unit : {foodData.foodNutrients[1].nutrient.unitName} <br/>
                                    </div>
                                </div> */}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Food Nutrient Derivation</Accordion.Header>
                            <Accordion.Body>
                                {/* <div className='row'>
                                    <div className='col-lg-12 col-md-12 col-sm-12 col-sx-12 detailViewLeft'>
                                        Description : {foodData.foodNutrients[1].foodNutrientDerivation.description} <br/>
                                        Food Nutrient Source : {foodData.foodNutrients[1].foodNutrientDerivation.foodNutrientSource.description} <br/>
                                    </div>
                                </div> */}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Nutrient Analysis Details</Accordion.Header>
                            <Accordion.Body>
                                {/* <div className='row'>
                                    <div className='col-lg-12 col-md-12 col-sm-12 col-sx-12 detailViewLeft'>
                                    Lab Method Technique : {foodData.foodNutrients[0].nutrientAnalysisDetails} <br/>
                                    Lab Method Description : {foodData.foodNutrients[0].nutrientAnalysisDetails} <br/>
                                       
                                    </div>
                                </div> */}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    {/* <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-6 col-sx-12 detailViewLeft'>
                        Description :
                    </div>
                    <div className='col-lg-8 col-md-8 col-sm-6 col-sx-12 detailViewRight'>
                        scsdfs sdfds sf sdf df sdfsdf sfsdf sdf s
                    </div>
                   </div> */}
                </div>
            </div>
        </div>
    );
}
export default DetailView;