cmake_minimum_required(VERSION 3.1)

project(test-name ./src/main.cpp)

list(APPEND CMAKE_MODULE_PATH 
    ${CMAKE_CURRENT_SOURCE_DIR}/node_modules/node-cmake
)

find_package(NodeJS)

add_nodejs_module(${PROJECT_NAME} <SOURCE AND HEADER FILES GO HERE>)