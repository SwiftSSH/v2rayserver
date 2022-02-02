# dig www.amazon.com    

; <<>> DiG 9.10.4-P6-RedHat-9.10.4-4.P6.fc25 <<>> www.amazon.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 65004
;; flags: qr rd ra; QUERY: 1, ANSWER: 6, AUTHORITY: 4, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
;; QUESTION SECTION:
;www.amazon.com.                        IN      A

;; ANSWER SECTION:
www.amazon.com.         1800    IN      CNAME   www.cdn.amazon.com.
www.cdn.amazon.com.     300     IN      CNAME   d3ag4hukkh62yn.cloudfront.net.
d3ag4hukkh62yn.cloudfront.net. 60 IN    A       52.85.147.120
d3ag4hukkh62yn.cloudfront.net. 60 IN    A       52.85.147.50
d3ag4hukkh62yn.cloudfront.net. 60 IN    A       52.85.147.92
d3ag4hukkh62yn.cloudfront.net. 60 IN    A       52.85.147.109

;; AUTHORITY SECTION:
d3ag4hukkh62yn.cloudfront.net. 1831 IN  NS      ns-1144.awsdns-15.org.
d3ag4hukkh62yn.cloudfront.net. 1831 IN  NS      ns-130.awsdns-16.com.
d3ag4hukkh62yn.cloudfront.net. 1831 IN  NS      ns-2021.awsdns-60.co.uk.
d3ag4hukkh62yn.cloudfront.net. 1831 IN  NS      ns-824.awsdns-39.net.

;; Query time: 3857 msec
;; SERVER: 192.168.0.203#53(192.168.0.203)
;; WHEN: Mon Mar 13 09:18:30 EDT 2017
;; MSG SIZE  rcvd: 306