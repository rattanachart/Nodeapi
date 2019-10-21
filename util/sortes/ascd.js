module.exports = (array, type, key) => {
    try {
      if (type === 'integer') {
        return array.sort((a, b) => {
          let paramA = a[key],
            paramB = b[key];
          if (paramA < paramB) return -1;
          if (paramA > paramB) return 1;
          return 0;
        });
      } else if (type === 'string') { 
        return array.sort((a, b) => {
          let paramA = a[key].toLowerCase(),
            paramB = b[key].toLowerCase();
          if (paramA < paramB) return -1;
          if (paramA > paramB) return 1;
          return 0;
        });
      }
  
      return array;
    } catch (error) {
      console.log(error.message)
      return array
    }
  }
  