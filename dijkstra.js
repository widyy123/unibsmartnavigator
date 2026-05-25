function cariRuteTerpendek(graph, start, end, mode) {
    let jarak = {}, sebelumnya = {}, antrian = new Set();
    for (let node in graph) {
        jarak[node] = Infinity;
        sebelumnya[node] = null;
        antrian.add(node);
    }
    jarak[start] = 0;

    while (antrian.size > 0) {
        let u = null;
        for (let node of antrian) if (u === null || jarak[node] < jarak[u]) u = node;
        if (jarak[u] === Infinity || u === end) break;
        antrian.delete(u);

        for (let v in graph[u].tetangga) {
            let bobot = graph[u].tetangga[v][mode];
            let alt = jarak[u] + bobot;
            if (alt < jarak[v]) {
                jarak[v] = alt;
                sebelumnya[v] = u;
            }
        }
    }
    let rute = [], curr = end;
    while (curr) { rute.unshift(curr); curr = sebelumnya[curr]; }
    return { sukses: (rute[0] === start), rute: rute };
}