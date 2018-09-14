let apiConfig = {
    fundApi: {
        pathGetFund: '/api/v1/fund',
        pathGetPlacement: '/api/v1/placement',
        pathGetEquity: '/api/v1/equity'
    },
    insuranceApi: {
    	pathGetDomestic: '/api/v1/demoestic',
    	pathGetOverseas: '/api/v1/overseas'
    },
    questionApi: {
    	pathGetQuestion: '/api/v1/question'
    },
    userApi: {
        pathRegister: '/api/v1/register'
    },
    reservationApi: {
        pathReservation: '/api/v1/reservation'
    },
    certificationApi: {
        pathCertification: '/api/v1/certification'
    }
}

export default apiConfig;