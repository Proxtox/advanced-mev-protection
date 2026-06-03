// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title MEV Router
contract MEVRouter {
    address public admin;

    constructor() {
        admin = msg.sender;
    }

    function route(bytes calldata data) external {
        require(msg.sender == admin, "Only admin");
        // Routing logic would go here
    }
}