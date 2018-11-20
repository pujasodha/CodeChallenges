function DNAStrand(dna) {
    // object for keys (letter given) and value (complementary dna)
    var dna_keys = {
        'A' : 'T',
        'T' : 'A',
        'C' : 'G',
        'G' : 'C'
    }

    // set complementary dna letter to a variable
    var complementary = ''
    
    // loop thru the dna string
    for (var i = 0; i < dna.length; i++) {
        //go into dna keys to look at whats given 
        complementary += dna_keys[dna[i]];
    }
    // return complementary of dna 
    return complementary
}

// =================== ONLINE SOLUTIONS ==============//
function DNAStrand(dna) {
    return dna.replace(/./g, function (c) {
        return DNAStrand.pairs[c]
    })
}

DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
}

// ============== // 
function DNAStrand(dna) {
    return dna.replace(/./g, function (c) {
        return DNAStrand.pairs[c]
    })
}

DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
}
// ============== // 

var pairs = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };

function DNAStrand(dna) {
    return dna.split('').map(function (v) { return pairs[v] }).join('');
}

// ============== // 

function DNAStrand(dna) {
    //your code here
    var result = "";
    for (var i = 0; i < dna.length; i++) {
        if (dna[i] === "A") {
            result += "T";
        }
        else if (dna[i] === "T") {
            result += "A";
        }
        else if (dna[i] === "C") {
            result += "G";
        }
        else if (dna[i] === "G") {
            result += "C";
        }
        else {
            result += dna[i];
        }
    }
    return result;
}


// ============== // 
