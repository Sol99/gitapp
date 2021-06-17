# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - 2021-06-17

### Added

-Agrega alerta que indique que un movimiento se guardó con éxito al crear el movimiento.
-Agrega endpoint en la API para permitir borrar un movimiento.
-Agrega campo description al modelo.
-Agrega validación de HTML5 en el form de crear movimiento.
-Crea vista de egresos de manera análoga a la tabla de ingresos.

### Fixed

-Arregla los headers de la card de los gráficos.
-Arregla el problema que hace que todos los movimientos se creen con la fecha actual.
-Arregla el formato de las fechas en las tablas para que sea más amigable.
-Hace refresh para que aparezca reflejado en la lista inmediatamente.

## [1.0.1] - 2021-05-03

### Added

-   Cypress detection for running tests on memory
-   Cypress seed before each cypress test

### Changed

-   Creates tables on server init and avoids erase on shutdown

### Removed

-   Cypress experimental configuration

## [1.0.0] - 2021-04-26

### Added

-   Movements API
-   Home UI with charts and last movements
-   Incomes UI with last incomes

[unreleased]: https://github.com/Sol99/gitapp/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/Sol99/gitapp/releases/tag/v1.1.0
[1.0.1]: https://github.com/Sol99/gitapp/releases/tag/v1.0.1
[1.0.0]: https://github.com/Sol99/gitapp/releases/tag/v1.0.0
