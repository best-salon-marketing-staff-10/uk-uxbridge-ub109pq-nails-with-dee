import { serviceList5 } from '/pages/core/info';

export default function Service5PriceList(){
    return(
        <>
            <div className="service-list-5">
                <div className="price-list-details-services">
                <div className="price-list-details-services-container">
                        <div className="price-list-details-services-item">
                            <div className="price-list-details-services-name">
                                <span className="price-list-details-services-name">
                                    {serviceList5.service1}
                                </span>
                                <span className="price-list-details-services-name-notice">
                                    
                                </span>
                            </div>
                            <div className="price-list-details-services-time">
                                <span className="price-list-details-services-time">
                                    {serviceList5.service1Time}
                                </span>
                            </div>
                            <div className="price-list-details-services-description">
                                <span className="price-list-details-services-description">
                                    {serviceList5.service1Description}
                                </span>
                            </div>
                        </div>
                        <div className="price-list-details-services-price">
                            <span className="price-list-addition-info">
                                
                            </span>
                            <span className="price-list-details-services-price">
                               £{serviceList5.service1Price}
                            </span>
                        </div>
                    </div>
                    <div className="price-list-details-services-container">
                        <div className="price-list-details-services-item">
                            <div className="price-list-details-services-name">
                                <span className="price-list-details-services-name">
                                    {serviceList5.service2}
                                </span>
                                <span className="price-list-details-services-name-notice">
                                    
                                </span>
                            </div>
                            <div className="price-list-details-services-time">
                                <span className="price-list-details-services-time">
                                    {serviceList5.service2Time}
                                </span>
                            </div>
                            <div className="price-list-details-services-description">
                                <span className="price-list-details-services-description">
                                    {serviceList5.service2Description}
                                </span>
                            </div>
                        </div>
                        <div className="price-list-details-services-price">
                            <span className="price-list-addition-info">
                                
                            </span>
                            <span className="price-list-details-services-price">
                               £{serviceList5.service2Price}
                            </span>
                        </div>
                    </div>
                    <div className="price-list-details-services-container">
                        <div className="price-list-details-services-item">
                            <div className="price-list-details-services-name">
                                <span className="price-list-details-services-name">
                                    {serviceList5.service7}
                                </span>
                                <span className="price-list-details-services-name-notice">
                                    
                                </span>
                            </div>
                            <div className="price-list-details-services-time">
                                <span className="price-list-details-services-time">
                                    {serviceList5.service7Time}
                                </span>
                            </div>
                            <div className="price-list-details-services-description">
                                <span className="price-list-details-services-description">
                                    {serviceList5.service7Description}
                                </span>
                            </div>
                        </div>
                        <div className="price-list-details-services-price">
                            <span className="price-list-addition-info">
                                
                            </span>
                            <span className="price-list-details-services-price">
                               £{serviceList5.service7Price}
                            </span>
                        </div>
                    </div>                  
                    
                </div>
            </div>
        </>
    )
}