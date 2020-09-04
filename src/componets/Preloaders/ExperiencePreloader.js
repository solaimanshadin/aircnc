import React from 'react';
import ContentLoader from 'react-content-loader'

const ExperiencePreloader = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                
                    <ContentLoader
                        viewBox="0 0 173 240"
                        height={240}
                        width={173}
                        speed={3}
                    >
                        <rect x="3" y="3" rx="10" ry="10" width="173%" height="140" />
                        <rect x="4" y="155" rx="0" ry="0" width="173%" height="12" />
                        <rect x="4" y="190" rx="0" ry="0" width="173%" height="12" />
                        <rect x="4" y="170" rx="0" ry="0" width="150%" height="12" />

                    </ContentLoader>

                </div>
                <div className="col-md-3">
                <ContentLoader
                        viewBox="0 0 173 240"
                        height={240}
                        width={173}
                        speed={3}
                    >
                        <rect x="3" y="3" rx="10" ry="10" width="173" height="140" />
                        <rect x="4" y="155" rx="0" ry="0" width="173" height="12" />
                        <rect x="4" y="190" rx="0" ry="0" width="173" height="12" />
                        <rect x="4" y="170" rx="0" ry="0" width="150" height="12" />

                    </ContentLoader>
                </div>
                <div className="col-md-3">
                <ContentLoader
                        viewBox="0 0 173 240"
                        height={240}
                        width={173}
                        speed={3}
                    >
                        <rect x="3" y="3" rx="10" ry="10" width="173" height="140" />
                        <rect x="4" y="155" rx="0" ry="0" width="173" height="12" />
                        <rect x="4" y="190" rx="0" ry="0" width="173" height="12" />
                        <rect x="4" y="170" rx="0" ry="0" width="150" height="12" />

                    </ContentLoader>
                </div>
                <div className="col-md-3">
                <ContentLoader
                        viewBox="0 0 173 240"
                        height={240}
                        width={173}
                        speed={3}
                    >
                        <rect x="3" y="3" rx="10" ry="10" width="173" height="140" />
                        <rect x="4" y="155" rx="0" ry="0" width="173" height="12" />
                        <rect x="4" y="190" rx="0" ry="0" width="173" height="12" />
                        <rect x="4" y="170" rx="0" ry="0" width="150" height="12" />
                    </ContentLoader>
                </div>
            </div>
        </div>
    );
};

export default ExperiencePreloader;