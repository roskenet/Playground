from nakadi.client import MyNakadiClient

if __name__ == '__main__':
    # execute only if run as the entry point into the program
    myClient = MyNakadiClient('eyJraWQiOiJwbGF0Zm9ybS1pYW0tdmNlaHloajYiLCJhbGciOiJFUzI1NiJ9.eyJzdWIiOiIzYThhYmEwNi03NjJkLTRlMWItOTY3NC0yNDU2OTY3NjQwYjkiLCJodHRwczovL2lkZW50aXR5LnphbGFuZG8uY29tL3JlYWxtIjoidXNlcnMiLCJodHRwczovL2lkZW50aXR5LnphbGFuZG8uY29tL3Rva2VuIjoiQmVhcmVyIiwiaHR0cHM6Ly9pZGVudGl0eS56YWxhbmRvLmNvbS9tYW5hZ2VkLWlkIjoiZnJvc2tlIiwiYXpwIjoienRva2VuIiwiaHR0cHM6Ly9pZGVudGl0eS56YWxhbmRvLmNvbS9icCI6IjgxMGQxZDAwLTQzMTItNDNlNS1iZDMxLWQ4MzczZmRkMjRjNyIsImF1dGhfdGltZSI6MTU0MDgwMzMzOSwiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS56YWxhbmRvLmNvbSIsImV4cCI6MTU0MTc2MDg0MywiaWF0IjoxNTQxNzU3MjMzfQ.VvjyPjtaE-TqCifZdQE0_52FjVDw2VawCc1CypcrtVdd4YKbblel0Uqqt-rpAE1hiRD_gI_PU9gY1qrVAwomLA', 'https://nakadi-live.aruha.zalan.do', 'sapcc.hcm.employees-positions.v4')
    myClient.doSomething()