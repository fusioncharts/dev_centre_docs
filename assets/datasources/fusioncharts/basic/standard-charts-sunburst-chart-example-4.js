{
    type: 'sunburst',
    renderAt: 'container',
    width: '650',
    height: '650',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Flare Data Store Segregation",
            "subcaption": "Click on the segments to Drill-down",
            "showPlotBorder": "1",
            "animation": "1",
            "paletteColors": "#D7D8E7, #A88CCC, #77ECC8, #97FAA4, #CFF69D, #EED482, #FFAE91, #FE93B5, #D98ACF, #7BCDE8, #94A8E9",
            "animationDuration": "2",
            "centerAngle": "90"
        },
        data: [{
                "id": "Flare",
                "parent": "",
                "label": "Flare",
                "value": "",
            },
            {
                "id": "Analytics",
                "parent": "Flare",
                "label": "Analytics",
                "value": ""
            },
            {
                "id": "Cluster",
                "parent": "Analytics",
                "label": "Cluster",
                "value": "1"
            },
            {
                "id": "AgglomerativeCluster",
                "parent": "Cluster",
                "label": "AgglomerativeCluster",
                "value": "3938"
            },
            {
                "id": "CommunityStructure",
                "parent": "Cluster",
                "label": "CommunityStructure",
                "value": "3812"
            },
            {
                "id": "HierarchicalCluster",
                "parent": "Cluster",
                "label": "HierarchicalCluster",
                "value": "6714"
            },
            {
                "id": "MergeEdge",
                "parent": "Cluster",
                "label": "MergeEdge",
                "value": "743"
            },
            {
                "id": "Graph",
                "parent": "Analytics",
                "label": "Graph",
                "value": "1"
            },
            {
                "id": "BetweennessCentrality",
                "parent": "Graph",
                "label": "BetweennessCentrality",
                "value": "3534"
            },
            {
                "id": "LinkDistance",
                "parent": "Graph",
                "label": "LinkDistance",
                "value": "5731"
            },
            {
                "id": "MaxFlowMinCut",
                "parent": "Graph",
                "label": "MaxFlowMinCut",
                "value": "7840"
            },
            {
                "id": "ShortestPaths",
                "parent": "Graph",
                "label": "ShortestPaths",
                "value": "5914"
            },
            {
                "id": "SpanningTree",
                "parent": "Graph",
                "label": "SpanningTree",
                "value": "3416"
            },
            {
                "id": "Optimization",
                "parent": "Analytics",
                "label": "Optimization",
                "value": "1"
            },
            {
                "id": "AspectRatioBanker",
                "parent": "Optimization",
                "label": "AspectRatioBanker",
                "value": "7074"
            },
            {
                "id": "Animate",
                "parent": "Flare",
                "label": "Animate",
                "value": "1"
            },
            {
                "id": "Easing",
                "parent": "Animate",
                "label": "Easing",
                "value": "17010"
            },
            {
                "id": "FunctionSequence",
                "parent": "Animate",
                "label": "FunctionSequence",
                "value": "5842"
            },
            {
                "id": "interpolate",
                "parent": "Animate",
                "label": "interpolate",
                "value": "1"
            },
            {
                "id": "ArrayInterpolator",
                "parent": "interpolate",
                "label": "ArrayInterpolator",
                "value": "1983"
            },
            {
                "id": "ColorInterpolator",
                "parent": "interpolate",
                "label": "ColorInterpolator",
                "value": "2047"
            },
            {
                "id": "DateInterpolator",
                "parent": "interpolate",
                "label": "DateInterpolator",
                "value": "1375"
            },
            {
                "id": "Interpolator",
                "parent": "interpolate",
                "label": "Interpolator",
                "value": "8746"
            },
            {
                "id": "MatrixInterpolator",
                "parent": "interpolate",
                "label": "MatrixInterpolator",
                "value": "2202"
            },
            {
                "id": "NumberInterpolator",
                "parent": "interpolate",
                "label": "NumberInterpolator",
                "value": "1382"
            },
            {
                "id": "ObjectInterpolator",
                "parent": "interpolate",
                "label": "ObjectInterpolator",
                "value": "1629"
            },
            {
                "id": "PointInterpolator",
                "parent": "interpolate",
                "label": "PointInterpolator",
                "value": "1675"
            },
            {
                "id": "RectangleInterpolator",
                "parent": "interpolate",
                "label": "RectangleInterpolator",
                "value": "2042"
            },
            {
                "id": "ISchedulable",
                "parent": "Animate",
                "label": "ISchedulable",
                "value": "1041"
            },
            {
                "id": "Parallel",
                "parent": "Animate",
                "label": "Parallel",
                "value": "5176"
            },
            {
                "id": "Pause",
                "parent": "Animate",
                "label": "Pause",
                "value": "449"
            },

            {
                "id": "Scheduler",
                "parent": "Animate",
                "label": "Scheduler",
                "value": "5593"
            },
            {
                "id": "Sequence",
                "parent": "Animate",
                "label": "Sequence",
                "value": "5534"
            },
            {
                "id": "Transition",
                "parent": "Animate",
                "label": "Transition",
                "value": "9201"
            },
            {
                "id": "Transitioner",
                "parent": "Animate",
                "label": "Transitioner",
                "value": "19975"
            },
            {
                "id": "TransitionEvent",
                "parent": "Animate",
                "label": "TransitionEvent",
                "value": "1116"
            },
            {
                "id": "Tween",
                "parent": "Animate",
                "label": "Tween",
                "value": "6006"
            },
            {
                "id": "Data",
                "parent": "Flare",
                "label": "Data",
                "value": "1"
            },
            {
                "id": "Converters",
                "parent": "Data",
                "label": "Converters",
                "value": "1"
            },
            {
                "id": "Converters",
                "parent": "Converters",
                "label": "Converters",
                "value": "721"
            },
            {
                "id": "DelimitedTextConverter",
                "parent": "Converters",
                "label": "DelimitedTextConverter",
                "value": "4294"
            },
            {
                "id": "GraphMLConverter",
                "parent": "Converters",
                "label": "GraphMLConverter",
                "value": "9800"
            },
            {
                "id": "IDataConverter",
                "parent": "Converters",
                "label": "IDataConverter",
                "value": "1314"
            },
            {
                "id": "JSONConverter",
                "parent": "Converters",
                "label": "JSONConverter",
                "value": "2220"
            },
            {
                "id": "DataField",
                "parent": "Data",
                "label": "DataField",
                "value": "1759"
            },
            {
                "id": "DataSchema",
                "parent": "Data",
                "label": "DataSchema",
                "value": "2165"
            },
            {
                "id": "DataSet",
                "parent": "Data",
                "label": "DataSet",
                "value": "586"
            },
            {
                "id": "DataSource",
                "parent": "Data",
                "label": "DataSource",
                "value": "3331"
            },
            {
                "id": "DataTable",
                "parent": "Data",
                "label": "DataTable",
                "value": "772"
            },
            {
                "id": "DataUtil",
                "parent": "Data",
                "label": "DataUtil",
                "value": "3322"
            },
            {
                "id": "Display",
                "parent": "Flare",
                "label": "Display",
                "value": "1"
            },
            {
                "id": "DirtySprite",
                "parent": "Display",
                "label": "DirtySprite",
                "value": "8833"
            },
            {
                "id": "LineSprite",
                "parent": "Display",
                "label": "LineSprite",
                "value": "1732"
            },
            {
                "id": "RectSprite",
                "parent": "Display",
                "label": "RectSprite",
                "value": "3623"
            },
            {
                "id": "TextSprite",
                "parent": "Display",
                "label": "TextSprite",
                "value": "10066"
            },
            {
                "id": "Flex",
                "parent": "Flare",
                "label": "Flex",
                "value": "1"
            },
            {
                "id": "FlareVis",
                "parent": "Flex",
                "label": "FlareVis",
                "value": "4116"
            },
            {
                "id": "Physics",
                "parent": "Flare",
                "label": "Physics",
                "value": "1"
            },
            {
                "id": "DragForce",
                "parent": "Physics",
                "label": "DragForce",
                "value": "1082"
            },
            {
                "id": "GravityForce",
                "parent": "Physics",
                "label": "GravityForce",
                "value": "1336"
            },
            {
                "id": "IForce",
                "parent": "Physics",
                "label": "IForce",
                "value": "319"
            },
            {
                "id": "NBodyForce",
                "parent": "Physics",
                "label": "NBodyForce",
                "value": "10498"
            },
            {
                "id": "Particle",
                "parent": "Physics",
                "label": "Particle",
                "value": "2822"
            },
            {
                "id": "Simulation",
                "parent": "Physics",
                "label": "Simulation",
                "value": "9983"
            },
            {
                "id": "Spring",
                "parent": "Physics",
                "label": "Spring",
                "value": "2213"
            },
            {
                "id": "SpringForce",
                "parent": "Physics",
                "label": "SpringForce",
                "value": "1681"
            },
            {
                "id": "Query",
                "parent": "Flare",
                "label": "Query",
                "value": "1"
            },
            {
                "id": "AggregateExpression",
                "parent": "Query",
                "label": "AggregateExpression",
                "value": "1616"
            },
            {
                "id": "And",
                "parent": "Query",
                "label": "And",
                "value": "1027"
            },
            {
                "id": "Arithmetic",
                "parent": "Query",
                "label": "Arithmetic",
                "value": "3891"
            },
            {
                "id": "Average",
                "parent": "Query",
                "label": "Average",
                "value": "891"
            },
            {
                "id": "BinaryExpression",
                "parent": "Query",
                "label": "BinaryExpression",
                "value": "2893"
            },
            {
                "id": "Comparison",
                "parent": "Query",
                "label": "Comparison",
                "value": "5103"
            },
            {
                "id": "CompositeExpression",
                "parent": "Query",
                "label": "CompositeExpression",
                "value": "3677"
            },
            {
                "id": "Count",
                "parent": "Query",
                "label": "Count",
                "value": "781"
            },
            {
                "id": "DateUtil",
                "parent": "Query",
                "label": "DateUtil",
                "value": "4141"
            },
            {
                "id": "Distinct",
                "parent": "Query",
                "label": "Distinct",
                "value": "933"
            },
            {
                "id": "Expression",
                "parent": "Query",
                "label": "Expression",
                "value": "5130"
            },
            {
                "id": "ExpressionIterator",
                "parent": "Query",
                "label": "ExpressionIterator",
                "value": "3617"
            },
            {
                "id": "Fn",
                "parent": "Query",
                "label": "Fn",
                "value": "3240"
            },
            {
                "id": "If",
                "parent": "Query",
                "label": "If",
                "value": "2732"
            },
            {
                "id": "IsA",
                "parent": "Query",
                "label": "IsA",
                "value": "2039"
            },
            {
                "id": "Literal",
                "parent": "Query",
                "label": "Literal",
                "value": "1214"
            },
            {
                "id": "Match",
                "parent": "Query",
                "label": "Match",
                "value": "3748"
            },
            {
                "id": "Maximum",
                "parent": "Query",
                "label": "Maximum",
                "value": "843"
            },
            {
                "id": "Minimum",
                "parent": "Query",
                "label": "Minimum",
                "value": "843"
            },
            {
                "id": "Not",
                "parent": "Query",
                "label": "Not",
                "value": "1554"
            },
            {
                "id": "Or",
                "parent": "Query",
                "label": "Or",
                "value": "970"
            },
            {
                "id": "Query1",
                "parent": "Query",
                "label": "Query",
                "value": "13896"
            },
            {
                "id": "Range",
                "parent": "Query",
                "label": "Range",
                "value": "1594"
            },
            {
                "id": "StringUtil",
                "parent": "Query",
                "label": "StringUtil",
                "value": "4130"
            },
            {
                "id": "Sum",
                "parent": "Query",
                "label": "Sum",
                "value": "791"
            },
            {
                "id": "Variable",
                "parent": "Query",
                "label": "Variable",
                "value": "1124"
            },
            {
                "id": "Variance",
                "parent": "Query",
                "label": "Variance",
                "value": "1876"
            },
            {
                "id": "Zor",
                "parent": "Query",
                "label": "Zor",
                "value": "1101"
            },
            {
                "id": "methods",
                "parent": "Query",
                "label": "methods",
                "value": "1876"
            },
            {
                "id": "add",
                "parent": "methods",
                "label": "add",
                "value": "593"
            },
            {
                "id": "and",
                "parent": "methods",
                "label": "and",
                "value": "330"
            },
            {
                "id": "average",
                "parent": "methods",
                "label": "average",
                "value": "287"
            },
            {
                "id": "count",
                "parent": "methods",
                "label": "count",
                "value": "277"
            },
            {
                "id": "distinct",
                "parent": "methods",
                "label": "distinct",
                "value": "292"
            },
            {
                "id": "div",
                "parent": "methods",
                "label": "div",
                "value": "595"
            },
            {
                "id": "eq",
                "parent": "methods",
                "label": "eq",
                "value": "594"
            },
            {
                "id": "fn",
                "parent": "methods",
                "label": "fn",
                "value": "460"
            },
            {
                "id": "gt",
                "parent": "methods",
                "label": "gt",
                "value": "603"
            },
            {
                "id": "gte",
                "parent": "methods",
                "label": "gte",
                "value": "625"
            },
            {
                "id": "iff",
                "parent": "methods",
                "label": "iff",
                "value": "748"
            },
            {
                "id": "isa",
                "parent": "methods",
                "label": "isa",
                "value": "461"
            },
            {
                "id": "lt",
                "parent": "methods",
                "label": "lt",
                "value": "597"
            },
            {
                "id": "lte",
                "parent": "methods",
                "label": "lte",
                "value": "619"
            },
            {
                "id": "max",
                "parent": "methods",
                "label": "max",
                "value": "283"
            },
            {
                "id": "min",
                "parent": "methods",
                "label": "min",
                "value": "283"
            },
            {
                "id": "mod",
                "parent": "methods",
                "label": "mod",
                "value": "591"
            },
            {
                "id": "mul",
                "parent": "methods",
                "label": "mul",
                "value": "603"
            },
            {
                "id": "neq",
                "parent": "methods",
                "label": "neq",
                "value": "599"
            },
            {
                "id": "not",
                "parent": "methods",
                "label": "not",
                "value": "386"
            },
            {
                "id": "or",
                "parent": "methods",
                "label": "or",
                "value": "323"
            },
            {
                "id": "orderby",
                "parent": "methods",
                "label": "orderby",
                "value": "307"
            },
            {
                "id": "range",
                "parent": "methods",
                "label": "range",
                "value": "772"
            },
            {
                "id": "select",
                "parent": "methods",
                "label": "select",
                "value": "296"
            },
            {
                "id": "stddev",
                "parent": "methods",
                "label": "stddev",
                "value": "363"
            },
            {
                "id": "sub",
                "parent": "methods",
                "label": "sub",
                "value": "600"
            },
            {
                "id": "sum",
                "parent": "methods",
                "label": "sum",
                "value": "280"
            },
            {
                "id": "update",
                "parent": "methods",
                "label": "update",
                "value": "307"
            },
            {
                "id": "variance",
                "parent": "methods",
                "label": "variance",
                "value": "335"
            },
            {
                "id": "where",
                "parent": "methods",
                "label": "where",
                "value": "299"
            },
            {
                "id": "xor",
                "parent": "methods",
                "label": "xor",
                "value": "354"
            },
            {
                "id": "_",
                "parent": "methods",
                "label": "_",
                "value": "264"
            },
            {
                "id": "Scale",
                "parent": "Flare",
                "label": "Scale",
                "value": "1"
            },
            {
                "id": "IScaleMap",
                "parent": "Scale",
                "label": "IScaleMap",
                "value": "2105"
            },
            {
                "id": "LinearScale",
                "parent": "Scale",
                "label": "LinearScale",
                "value": "1316"
            },
            {
                "id": "LogScale",
                "parent": "Scale",
                "label": "LogScale",
                "value": "3151"
            },
            {
                "id": "OrdinalScale",
                "parent": "Scale",
                "label": "OrdinalScale",
                "value": "3770"
            },
            {
                "id": "QuantileScale",
                "parent": "Scale",
                "label": "QuantileScale",
                "value": "2435"
            },
            {
                "id": "QuantitativeScale",
                "parent": "Scale",
                "label": "QuantitativeScale",
                "value": "4839"
            },
            {
                "id": "RootScale",
                "parent": "Scale",
                "label": "RootScale",
                "value": "1756"
            },
            {
                "id": "Scale1",
                "parent": "Scale",
                "label": "Scale",
                "value": "4268"
            },
            {
                "id": "ScaleType",
                "parent": "Scale",
                "label": "ScaleType",
                "value": "1821"
            },
            {
                "id": "TimeScale",
                "parent": "Scale",
                "label": "TimeScale",
                "value": "5833"
            },
            {
                "id": "Util",
                "parent": "Flare",
                "label": "Util",
                "value": "1"
            },
            {
                "id": "Arrays",
                "parent": "Util",
                "label": "Arrays",
                "value": "8258"
            },
            {
                "id": "Colors",
                "parent": "Util",
                "label": "Colors",
                "value": "10001"
            },
            {
                "id": "Dates",
                "parent": "Util",
                "label": "Dates",
                "value": "8217"
            },
            {
                "id": "Displays",
                "parent": "Util",
                "label": "Displays",
                "value": "12555"
            },
            {
                "id": "Filter",
                "parent": "Util",
                "label": "Filter",
                "value": "2324"
            },
            {
                "id": "Geometry",
                "parent": "Util",
                "label": "Geometry",
                "value": "10993"
            },
            {
                "id": "Heap",
                "parent": "Util",
                "label": "Heap",
                "value": "1"
            },
            {
                "id": "FibonacciHeap",
                "parent": "Heap",
                "label": "FibonacciHeap",
                "value": "9354"
            },
            {
                "id": "HeapNode",
                "parent": "Heap",
                "label": "HeapNode",
                "value": "1233"
            },
            {
                "id": "IEvaluable",
                "parent": "Util",
                "label": "IEvaluable",
                "value": "335"
            },
            {
                "id": "IPredicate",
                "parent": "Util",
                "label": "IPredicate",
                "value": "383"
            },
            {
                "id": "IValueProxy",
                "parent": "Util",
                "label": "IValueProxy",
                "value": "874"
            },
            {
                "id": "math",
                "parent": "Util",
                "label": "math",
                "value": "1"
            },
            {
                "id": "Maths",
                "parent": "Util",
                "label": "Maths",
                "value": "17705"
            },
            {
                "id": "Orientation",
                "parent": "Util",
                "label": "Orientation",
                "value": "1486"
            },
            {
                "id": "palette",
                "parent": "Util",
                "label": "palette",
                "value": "1"
            },
            {
                "id": "Property",
                "parent": "Util",
                "label": "Property",
                "value": "5559"
            },
            {
                "id": "Shapes",
                "parent": "Util",
                "label": "Shapes",
                "value": "19118"
            },
            {
                "id": "Sort",
                "parent": "Util",
                "label": "Sort",
                "value": "6887"
            },
            {
                "id": "Stats",
                "parent": "Util",
                "label": "Stats",
                "value": "6557"
            },
            {
                "id": "Strings",
                "parent": "Util",
                "label": "Strings",
                "value": "22026"
            },
            {
                "id": "DenseMatrix",
                "parent": "math",
                "label": "DenseMatrix",
                "value": "3165"
            },
            {
                "id": "IMatrix",
                "parent": "math",
                "label": "IMatrix",
                "value": "2815"
            },
            {
                "id": "SparseMatrix",
                "parent": "math",
                "label": "SparseMatrix",
                "value": "3366"
            },
            {
                "id": "ColorPalette",
                "parent": "Palette",
                "label": "ColorPalette",
                "value": "6367"
            },
            {
                "id": "Palette1",
                "parent": "Palette",
                "label": "Palette",
                "value": "1229"
            },
            {
                "id": "ShapePalette",
                "parent": "Palette",
                "label": "ShapePalette",
                "value": "2059"
            },
            {
                "id": "SizePalette",
                "parent": "Palette",
                "label": "SizePalette",
                "value": "2291"
            },
            {
                "id": "Vis",
                "parent": "Flare",
                "label": "Vis",
                "value": "1"
            },
            {
                "id": "Controls",
                "parent": "Vis",
                "label": "Controls",
                "value": "44639"
            },
            {
                "id": "AnchorControl",
                "parent": "Controls",
                "label": "AnchorControl",
                "value": "2138"
            },
            {
                "id": "ClickControl",
                "parent": "Controls",
                "label": "ClickControl",
                "value": "3824"
            },
            {
                "id": "Control1",
                "parent": "Controls",
                "label": "Control",
                "value": "1353"
            },
            {
                "id": "ControlList",
                "parent": "Controls",
                "label": "ControlList",
                "value": "4665"
            },
            {
                "id": "DragControl",
                "parent": "Controls",
                "label": "DragControl",
                "value": "2649"
            },
            {
                "id": "ExpandControl",
                "parent": "Controls",
                "label": "ExpandControl",
                "value": "2832"
            },
            {
                "id": "HoverControl",
                "parent": "Controls",
                "label": "HoverControl",
                "value": "4896"
            },
            {
                "id": "IControl",
                "parent": "Controls",
                "label": "IControl",
                "value": "763"
            },
            {
                "id": "PanZoomControl",
                "parent": "Controls",
                "label": "PanZoomControl",
                "value": "5222"
            },
            {
                "id": "SelectionControl",
                "parent": "Controls",
                "label": "SelectionControl",
                "value": "7862"
            },
            {
                "id": "TooltipControl",
                "parent": "Controls",
                "label": "TooltipControl",
                "value": "8435"
            },
            {
                "id": "data1",
                "parent": "Vis",
                "label": "data",
                "value": "1"
            },
            {
                "id": "Data2",
                "parent": "data",
                "label": "Data",
                "value": "20544"
            },
            {
                "id": "DataList",
                "parent": "data1",
                "label": "DataList",
                "value": "19788"
            },
            {
                "id": "DataSprite",
                "parent": "data1",
                "label": "DataSprite",
                "value": "10349"
            },
            {
                "id": "EdgeSprite",
                "parent": "data1",
                "label": "EdgeSprite",
                "value": "3301"
            },
            {
                "id": "NodeSprite",
                "parent": "data1",
                "label": "NodeSprite",
                "value": "19382"
            },
            {
                "id": "ScaleBinding",
                "parent": "data1",
                "label": "ScaleBinding",
                "value": "11275"
            },
            {
                "id": "Tree",
                "parent": "data1",
                "label": "Tree",
                "value": "7147"
            },
            {
                "id": "TreeBuilder",
                "parent": "data1",
                "label": "TreeBuilder",
                "value": "9930"
            },
            {
                "id": "Render",
                "parent": "data1",
                "label": "Render",
                "value": "1"
            },
            {
                "id": "ArrowType",
                "parent": "Render",
                "label": "ArrowType",
                "value": "698"
            },
            {
                "id": "EdgeRenderer",
                "parent": "Render",
                "label": "EdgeRenderer",
                "value": "5569"
            },
            {
                "id": "IRenderer",
                "parent": "Render",
                "label": "IRenderer",
                "value": "353"
            },
            {
                "id": "ShapeRenderer",
                "parent": "Render",
                "label": "ShapeRenderer",
                "value": "2247"
            },
            {
                "id": "events",
                "parent": "Vis",
                "label": "events",
                "value": "1"
            },
            {
                "id": "DataEvent",
                "parent": "events",
                "label": "DataEvent",
                "value": "2313"
            },
            {
                "id": "SelectionEvent",
                "parent": "events",
                "label": "SelectionEvent",
                "value": "1880"
            },
            {
                "id": "TooltipEvent",
                "parent": "events",
                "label": "TooltipEvent",
                "value": "1701"
            },
            {
                "id": "VisualizationEvent",
                "parent": "events",
                "label": "VisualizationEvent",
                "value": "1117"
            },
            {
                "id": "legend",
                "parent": "Vis",
                "label": "legend",
                "value": "1"
            },
            {
                "id": "Legend1",
                "parent": "legend",
                "label": "Legend",
                "value": "20859"
            },
            {
                "id": "LegendItem",
                "parent": "legend",
                "label": "LegendItem",
                "value": "4614"
            },
            {
                "id": "LegendRange",
                "parent": "legend",
                "label": "LegendRange",
                "value": "10530"
            },
            {
                "id": "Operator",
                "parent": "Vis",
                "label": "Operator",
                "value": "1"
            },
            {
                "id": "Distortion",
                "parent": "Operator",
                "label": "Distortion",
                "value": "1"
            },
            {
                "id": "BifocalDistortion",
                "parent": "Distortion",
                "label": "BifocalDistortion",
                "value": "4461"
            },
            {
                "id": "Distortion1",
                "parent": "Distortion",
                "label": "Distortion",
                "value": "6314"
            },
            {
                "id": "FisheyeDistortion",
                "parent": "Distortion",
                "label": "FisheyeDistortion",
                "value": "3444"
            },
            {
                "id": "Encoder",
                "parent": "Operator",
                "label": "Encoder",
                "value": "1"
            },
            {
                "id": "ColorEncoder",
                "parent": "Encoder",
                "label": "ColorEncoder",
                "value": "3179"
            },
            {
                "id": "Encoder1",
                "parent": "Encoder",
                "label": "Encoder",
                "value": "4060"
            },
            {
                "id": "PropertyEncoder",
                "parent": "Encoder",
                "label": "PropertyEncoder",
                "value": "4138"
            },
            {
                "id": "ShapeEncoder",
                "parent": "Encoder",
                "label": "ShapeEncoder",
                "value": "1690"
            },
            {
                "id": "SizeEncoder",
                "parent": "Encoder",
                "label": "SizeEncoder",
                "value": "1830"
            },
            {
                "id": "Filter",
                "parent": "Operator",
                "label": "Filter",
                "value": "1"
            },
            {
                "id": "FisheyeTreeFilter",
                "parent": "Filter",
                "label": "FisheyeTreeFilter",
                "value": "5219"
            },
            {
                "id": "GraphDistanceFilter",
                "parent": "Filter",
                "label": "GraphDistanceFilter",
                "value": "3165"
            },
            {
                "id": "VisibilityFilter",
                "parent": "Filter",
                "label": "VisibilityFilter",
                "value": "3509"
            },
            {
                "id": "IOperator",
                "parent": "Operator",
                "label": "IOperator",
                "value": "1286"
            },
            {
                "id": "Label1",
                "parent": "Operator",
                "label": "label",
                "value": "1"
            },
            {
                "id": "Labeler",
                "parent": "Label1",
                "label": "Labeler",
                "value": "9956"
            },
            {
                "id": "RadialLabeler",
                "parent": "Label1",
                "label": "RadialLabeler",
                "value": "3899"
            },
            {
                "id": "StackedAreaLabeler",
                "parent": "Label1",
                "label": "StackedAreaLabeler",
                "value": "3202"
            },
            {
                "id": "Layout1",
                "parent": "Operator",
                "label": "Layout",
                "value": "1"
            }, {
                "id": "AxisLayout",
                "parent": "Layout1",
                "label": "AxisLayout",
                "value": "6725"
            },
            {
                "id": "BundledEdgeRouter",
                "parent": "Layout1",
                "label": "BundledEdgeRouter",
                "value": "3727"
            },
            {
                "id": "CircleLayout",
                "parent": "Layout1",
                "label": "CircleLayout",
                "value": "9317"
            },
            {
                "id": "CirclePackingLayout",
                "parent": "Layout1",
                "label": "CirclePackingLayout",
                "value": "12003"
            },
            {
                "id": "DendrogramLayout",
                "parent": "Layout1",
                "label": "DendrogramLayout",
                "value": "4853"
            },
            {
                "id": "ForceDirectedLayout",
                "parent": "Layout1",
                "label": "ForceDirectedLayout",
                "value": "8411"
            },
            {
                "id": "IcicleTreeLayout",
                "parent": "Layout1",
                "label": "IcicleTreeLayout",
                "value": "4864"
            },
            {
                "id": "IndentedTreeLayout",
                "parent": "Layout1",
                "label": "IndentedTreeLayout",
                "value": "3174"
            },
            {
                "id": "Layout",
                "parent": "Layout1",
                "label": "Layout",
                "value": "7881"
            },
            {
                "id": "NodeLinkTreeLayout",
                "parent": "Layout1",
                "label": "NodeLinkTreeLayout",
                "value": "12870"
            },
            {
                "id": "PieLayout",
                "parent": "Layout1",
                "label": "PieLayout",
                "value": "2728"
            },
            {
                "id": "RadialTreeLayout",
                "parent": "Layout1",
                "label": "RadialTreeLayout",
                "value": "12348"
            },
            {
                "id": "RandomLayout",
                "parent": "Layout1",
                "label": "RandomLayout",
                "value": "870"
            },
            {
                "id": "StackedAreaLayout",
                "parent": "Layout1",
                "label": "StackedAreaLayout",
                "value": "9121"
            },
            {
                "id": "TreeMapLayout",
                "parent": "Layout1",
                "label": "TreeMapLayout",
                "value": "9191"
            },
            {
                "id": "Operator1",
                "parent": "Operator",
                "label": "Operator",
                "value": "2490"
            },
            {
                "id": "OperatorList",
                "parent": "Operator",
                "label": "OperatorList",
                "value": "5248"
            },
            {
                "id": "OperatorSequence",
                "parent": "Operator",
                "label": "OperatorSequence",
                "value": "4190"
            },
            {
                "id": "OperatorSwitch",
                "parent": "Operator",
                "label": "OperatorSwitch",
                "value": "2581"
            },
            {
                "id": "SortOperator",
                "parent": "Operator",
                "label": "SortOperator",
                "value": "2023"
            },
            {
                "id": "Visualization",
                "parent": "Vis",
                "label": "Visualization",
                "value": "16540"
            }
        ]
    }
}