/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
	let list = []
	for(let i=0; i<s1.length; i++){
		if(s1[i] != s2[i])   list.push(i)
		if(list.length > 2) return false
	}
	return list.length == 0 || (list.length == 2 && s1[list[0]] == s2[list[1]] && s2[list[0]] == s1[list[1]])
};