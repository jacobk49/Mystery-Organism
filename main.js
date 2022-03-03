// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

// Makes a new pAequor specimen, and contains functions we can use on it
function pAequorFactory(number, bases) {
  return {specimenNum: number, dna: bases,

    // Mutates a random base of DNA
    mutate(bases) {
      const randomNumber = Math.floor(Math.random() * 15)
      const selectedBase = this.dna[randomNumber]
      let mutatedDna = this.dna
      mutatedDna.splice(randomNumber, 1)
      let newBase = selectedBase
      while (newBase === selectedBase) {
        newBase = returnRandBase()
      }
      mutatedDna.push(newBase)
      return mutatedDna
  },

  // Compares the DNA of two specimens and returns the percent they have in common
    compareDNA(firstSpecimen, compareSpecimen) {
      let sameBases = 0
      for (let i = 0; i < compareSpecimen.dna.length; i++) {
        if (firstSpecimen.dna[i] == compareSpecimen.dna[i]) {
          sameBases++
        }
      }
      const percentSame = ((sameBases / compareSpecimen.dna.length) * 100).toFixed(2)
      console.log(`Specimen ${pAequor1.specimenNum} and specimen ${compareSpecimen.specimenNum} have ${percentSame}% DNA in common`)
    },

    // Returns true if the specimen has a sixty percent chance or higher of surviving, false if not
    willLikelySurvive(pAequor) {
      let goodBase = 0
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          goodBase++
        }
      }
      if ((goodBase / this.dna.length) * 100 >= 60) {
        return true
      }
      else {
        return false
      }
    },

    // Returns the complement strand which would form the famous "Double Helix" pattern
    complementStrand() {
      const complementaryStrand = []
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'A') {
          complementaryStrand.push('T')
        } else if (this.dna[i] === 'T') {
          complementaryStrand.push('A')
        } else if (this.dna[i] === 'C') {
          complementaryStrand.push('G')
        } else if (this.dna[i] === 'G') {
          complementaryStrand.push('C')
        }
      }
      return complementaryStrand
    }
    }
  }

  // Creates an array of 30 viable pAequor's
const workingInstances = []
function findWorkingInstances() {
  for (let i = 1; workingInstances.length < 30; i++){
    let testAequor = pAequorFactory(i, mockUpStrand())
    if (testAequor.willLikelySurvive() == true) {
      workingInstances.push(testAequor)
    }
  }
}

