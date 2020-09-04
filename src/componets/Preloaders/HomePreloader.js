import React from 'react';
import ContentLoader from 'react-content-loader'

const HomePreloader = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                
                    <ContentLoader
                        viewBox="0 0 235 300"
                        height={300}
                        width={235}
                        speed={3}
                    >
                        <rect x="3" y="3" rx="10" ry="10" width="235" height="157" />
                        <rect x="4" y="175" rx="0" ry="0" width="235" height="12" />
                        <rect x="4" y="190" rx="0" ry="0" width="200" height="12" />
                        <rect x="4" y="210" rx="0" ry="0" width="235" height="12" />

                    </ContentLoader>

                </div>
                <div className="col-md-4">
                
                <ContentLoader
                        viewBox="0 0 235 300"
                        height={300}
                        width={235}
                        speed={3}
                    >
                        <rect x="3" y="3" rx="10" ry="10" width="235" height="157" />
                        <rect x="4" y="175" rx="0" ry="0" width="235" height="12" />
                        <rect x="4" y="190" rx="0" ry="0" width="200" height="12" />
                        <rect x="4" y="210" rx="0" ry="0" width="235" height="12" />

                    </ContentLoader>

                </div>
                <div className="col-md-4">
                
                <ContentLoader
                        viewBox="0 0 235 300"
                        height={300}
                        width={235}
                        speed={3}
                    >
                        <rect x="3" y="3" rx="10" ry="10" width="235" height="157" />
                        <rect x="4" y="175" rx="0" ry="0" width="235" height="12" />
                        <rect x="4" y="190" rx="0" ry="0" width="200" height="12" />
                        <rect x="4" y="210" rx="0" ry="0" width="235" height="12" />

                    </ContentLoader>

                </div>
            </div>
        </div>
    );
};

export default HomePreloader;