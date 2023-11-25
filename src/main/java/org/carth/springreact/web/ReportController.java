package org.carth.springreact.web;

import lombok.RequiredArgsConstructor;
import org.carth.springreact.service.PersonService;
import org.dhatim.fastexcel.Workbook;
import org.dhatim.fastexcel.Worksheet;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ReportController {

    private final PersonService personService;

    @GetMapping("/report")
    public void generateReport(@RequestParam(defaultValue = "1000") int size, HttpServletResponse response) throws IOException {
        response.setContentType("application/octet-stream");
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
        String currentDateTime = dateFormatter.format(new Date());
        String headerValue = "attachment; filename=users_" + currentDateTime + ".xlsx";
        response.setHeader(HttpHeaders.CONTENT_DISPOSITION, headerValue);
        writeExcel(size, response.getOutputStream());
    }


    public void writeExcel(int size, OutputStream os) {
        try (Workbook wb = new Workbook(os, "MyApplication", "1.0")) {

            Worksheet ws = wb.newWorksheet("Report Person");
            // write title
            ws.value(0, 0, "id");
            ws.value(0, 1, "first name");
            ws.value(0, 2, "last name");
            ws.value(0, 3, "age");
            ws.value(0, 4, "visits");
            ws.value(0, 5, "progress");
            ws.value(0, 6, "status");

            // write values
            for (int i = 1; i <= size; i++) {
                var p = personService.createPerson(i);
                ws.value(i, 0, p.getId());
                ws.value(i, 1, p.getFirstName());
                ws.value(i, 2, p.getLastName());
                ws.value(i, 3, p.getAge());
                ws.value(i, 4, p.getVisits());
                ws.value(i, 5, p.getProgress());
                ws.value(i, 6, p.getStatus());

            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

}