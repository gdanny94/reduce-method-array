function arrayMadness(a, b) {
    //square every element in array
    //use Math.pow()
    //use forEach to target each array. 
      
    //   const firstVal = a.map(Math.pow(i,2))
    //   const sumA = a.reduce((a,c) => a + c, 0)
      
    //   const secondVal = b.map(Math.pow(i,3))
      const sum =a.reduce((sum,c) => sum + c ** 2,0) > b.reduce((sum,c) => sum + c ** 3, 0)
      
      
      return sum
    }
