d3.csv('ue_industry.csv', data => {

    console.log(data);

    const xScale = d3.scaleLinear()
        .domain([-totalYmax/2, totalYmax/2)
        .range([500, 20]);

    const fillScale = d3.scaleOrdinal()
        .domain(indusries)
        .range(colors);

    const stackLayout = d3.stack()
        .keys(indusries)
        .offset(d3.stackOffsetSilhouette)

    const stackArea = d3.area()
        .x((d,i)) => {
            console.log({"d": d, "i": i});
            return xScale(i)

        .y0(d => yScale(d[0]))
        .y1(d => yScale(d[1]))
        curve(d3.curveBasis);
    
        }


    d3.select('#answer2')
        .selectAll('path')
        .daatq(stackLayout(data))
    

        

});