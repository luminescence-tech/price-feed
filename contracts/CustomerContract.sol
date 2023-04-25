// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./BlizzardOracleRouter.sol";

contract CustomerContract is BlizzardOracleRouter {
    event PriceInfo(bytes32 base, bytes32 quote);
    address oracle;

    constructor() BlizzardOracleRouter() {}

    function responseHandler(bytes32 base, bytes32 quote) external {
        emit PriceInfo(base, quote);
    }

    function priceRequest(bytes32 url_base, bytes32 path, bytes32 query, bytes32 headers) external returns (bool) {
       bool result = BlizzardOracleRouter(oracle).getPriceFull(url_base, path, query, headers);

       return result;
    }
}
