/* *
 *
 *  (c) 2010-2020 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

import BaseSeries from '../Core/Series/Series.js';

/**
 * Internal types
 * @private
 */
declare global {
    namespace Highcharts {
        class AreaSplineRangePoint extends AreaRangePoint {
            public option: AreaSplineRangePointOptions;
            public series: AreaSplineRangeSeries;
        }
        class AreaSplineRangeSeries extends AreaRangeSeries {
            public data: Array<AreaSplineRangePoint>;
            public getPointSpline: SplineSeries['getPointSpline'];
            public options: AreaSplineRangeSeriesOptions;
            public pointClass: typeof AreaSplineRangePoint;
            public points: Array<AreaSplineRangePoint>;
        }
        interface AreaSplineRangePointOptions extends AreaRangePointOptions {
        }
        interface AreaSplineRangeSeriesOptions extends AreaRangeSeriesOptions {
            states?: SeriesStatesOptionsObject<AreaSplineSeries>;
        }
    }
}

/**
 * @private
 */
declare module '../Core/Series/Types' {
    interface SeriesTypeRegistry {
        areasplinerange: typeof Highcharts.AreaSplineRangeSeries;
    }
}

import '../Core/Options.js';

/**
 * The area spline range is a cartesian series type with higher and
 * lower Y values along an X axis. The area inside the range is colored, and
 * the graph outlining the area is a smoothed spline.
 *
 * @sample {highstock|highstock} stock/demo/areasplinerange/
 *         Area spline range
 *
 * @extends   plotOptions.arearange
 * @since     2.3.0
 * @excluding step, boostThreshold, boostBlending
 * @product   highcharts highstock
 * @requires  highcharts-more
 * @apioption plotOptions.areasplinerange
 */
BaseSeries.seriesType<typeof Highcharts.AreaSplineSeries>(
    'areasplinerange',
    'arearange',
    /**
     * @see [fillColor](#plotOptions.areasplinerange.fillColor)
     * @see [fillOpacity](#plotOptions.areasplinerange.fillOpacity)
     *
     * @apioption plotOptions.areasplinerange.color
     */

    /**
     * @see [color](#plotOptions.areasplinerange.color)
     * @see [fillOpacity](#plotOptions.areasplinerange.fillOpacity)
     *
     * @apioption plotOptions.areasplinerange.fillColor
     */

    /**
     * @see [color](#plotOptions.areasplinerange.color)
     * @see [fillColor](#plotOptions.areasplinerange.fillColor)
     *
     * @default   {highcharts} 0.75
     * @default   {highstock} 0.75
     * @apioption plotOptions.areasplinerange.fillOpacity
     */

    null as any,
    {
        getPointSpline: (
            BaseSeries.seriesTypes.spline as typeof Highcharts.SplineSeries
        ).prototype.getPointSpline
    }
);

/**
 * A `areasplinerange` series. If the [type](#series.areasplinerange.type)
 * option is not specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.areasplinerange
 * @excluding dataParser, dataURL, stack, step, boostThreshold, boostBlending
 * @product   highcharts highstock
 * @requires  highcharts-more
 * @apioption series.areasplinerange
 */

/**
 * @see [fillColor](#series.areasplinerange.fillColor)
 * @see [fillOpacity](#series.areasplinerange.fillOpacity)
 *
 * @apioption series.areasplinerange.color
 */

/**
 * An array of data points for the series. For the `areasplinerange`
 * series type, points can be given in the following ways:
 *
 * 1. An array of arrays with 3 or 2 values. In this case, the values correspond
 *    to `x,low,high`. If the first value is a string, it is applied as the name
 *    of the point, and the `x` value is inferred. The `x` value can also be
 *    omitted, in which case the inner arrays should be of length 2\. Then the
 *    `x` value is automatically calculated, either starting at 0 and
 *    incremented by 1, or from `pointStart` and `pointInterval` given in the
 *    series options.
 *    ```js
 *    data: [
 *        [0, 0, 5],
 *        [1, 9, 1],
 *        [2, 5, 2]
 *    ]
 *    ```
 *
 * 2. An array of objects with named values. The following snippet shows only a
 *    few settings, see the complete options set below. If the total number of
 *    data points exceeds the series'
 *    [turboThreshold](#series.areasplinerange.turboThreshold), this option is
 *    not available.
 *    ```js
 *    data: [{
 *        x: 1,
 *        low: 5,
 *        high: 0,
 *        name: "Point2",
 *        color: "#00FF00"
 *    }, {
 *        x: 1,
 *        low: 4,
 *        high: 1,
 *        name: "Point1",
 *        color: "#FF00FF"
 *    }]
 *    ```
 *
 * @sample {highcharts} highcharts/series/data-array-of-arrays/
 *         Arrays of numeric x and y
 * @sample {highcharts} highcharts/series/data-array-of-arrays-datetime/
 *         Arrays of datetime x and y
 * @sample {highcharts} highcharts/series/data-array-of-name-value/
 *         Arrays of point.name and y
 * @sample {highcharts} highcharts/series/data-array-of-objects/
 *         Config objects
 *
 * @type      {Array<Array<(number|string),number>|Array<(number|string),number,number>|*>}
 * @extends   series.arearange.data
 * @product   highcharts highstock
 * @apioption series.areasplinerange.data
 */

/**
 * @see [color](#series.areasplinerange.color)
 * @see [fillOpacity](#series.areasplinerange.fillOpacity)
 *
 * @apioption series.areasplinerange.fillColor
 */

/**
 * @see [color](#series.areasplinerange.color)
 * @see [fillColor](#series.areasplinerange.fillColor)
 *
 * @default   {highcharts} 0.75
 * @default   {highstock} 0.75
 * @apioption series.areasplinerange.fillOpacity
 */

''; // adds doclets above to transpiled file